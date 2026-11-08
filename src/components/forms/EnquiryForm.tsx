import { CircleAlert, CircleCheck, LoaderCircle, TriangleAlert } from 'lucide-react';
import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { FormField } from '@/components/forms/FormField';
import { industries } from '@/data/industries';
import { services } from '@/data/services';
import { site } from '@/data/site';
import { type EnquiryResult, submitEnquiry } from '@/services/enquiryService';
import type { EnquiryPayload } from '@/types';
import {
  DESCRIPTION_MAX,
  type EnquiryErrors,
  type EnquiryField,
  validateEnquiry,
  validateEnquiryField,
} from '@/utils/validation';

type Status = 'idle' | 'submitting' | EnquiryResult;

const NOT_SURE_VALUE = 'not-sure';

const emptyValues: EnquiryPayload = {
  name: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  service: '',
  description: '',
};

const fieldId = (field: EnquiryField) => `enquiry-${field}`;

function Notice({ tone, title, children }: { tone: 'warning' | 'error'; title: string; children: React.ReactNode }) {
  const Icon = tone === 'warning' ? TriangleAlert : CircleAlert;
  const styles = tone === 'warning' ? 'border-[#f5c563] bg-[#fffaeb] text-[#7a4a06]' : 'border-[#fda29b] bg-[#fef3f2] text-[#912018]';

  return (
    <div className={`flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${styles}`}>
      <Icon aria-hidden className="mt-0.5 size-[18px] shrink-0" />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-0.5">{children}</p>
      </div>
    </div>
  );
}

export function EnquiryForm() {
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState<EnquiryPayload>(() => {
    const service = searchParams.get('service') ?? '';
    const industry = searchParams.get('industry') ?? '';
    return {
      ...emptyValues,
      service: services.some((item) => item.slug === service) ? service : '',
      industry: industries.some((item) => item.slug === industry) ? industry : '',
    };
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== 'idle' && status !== 'submitting') statusRef.current?.focus();
  }, [status]);

  const onChange = (field: EnquiryField) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: validateEnquiryField(field, value) }));
    if (status === 'failed' || status === 'not_configured') setStatus('idle');
  };

  const onBlur = (field: EnquiryField) => () => {
    // Only flag a field after the visitor has typed something; empty fields are reported on submit.
    if (values[field]) setErrors((current) => ({ ...current, [field]: validateEnquiryField(field, values[field]) }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0] as EnquiryField | undefined;
    if (firstInvalid) {
      setStatus('idle');
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setStatus('submitting');
    const trimmed = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, value.trim()]),
    ) as unknown as EnquiryPayload;
    setStatus(await submitEnquiry(trimmed));
  };

  const reset = () => {
    setValues(emptyValues);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'received') {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="py-12 text-center outline-none">
        <CircleCheck aria-hidden className="mx-auto size-12 text-[#067647]" strokeWidth={1.5} />
        <h3 className="mt-5 font-display text-2xl font-semibold text-fg">Thank you. We have received your enquiry.</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-fg-muted">
          Our team will review your project details and reply to {values.email}.
        </p>
        <Button type="button" variant="secondary" onClick={reset} className="mt-8">
          Send another enquiry
        </Button>
      </div>
    );
  }

  const submitting = status === 'submitting';
  const text = (field: EnquiryField, label: string, type: string, autoComplete: string, placeholder: string) => (
    <FormField id={fieldId(field)} label={label} error={errors[field]}>
      {(control) => (
        <input
          {...control}
          name={field}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={values[field]}
          onChange={onChange(field)}
          onBlur={onBlur(field)}
          className="field-control"
        />
      )}
    </FormField>
  );

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={submitting}>
      <p className="mb-6 text-sm text-fg-muted">All fields are required.</p>

      <div className="grid gap-5 sm:grid-cols-2">
        {text('name', 'Name', 'text', 'name', 'Your full name')}
        {text('company', 'Company name', 'text', 'organization', 'Your company')}
        {text('email', 'Business email', 'email', 'email', 'name@company.com')}
        {text('phone', 'Phone number', 'tel', 'tel', '+91 00000 00000')}

        <FormField id={fieldId('industry')} label="Industry" error={errors.industry}>
          {(control) => (
            <select {...control} name="industry" value={values.industry} onChange={onChange('industry')} className="field-control">
              <option value="">Select your industry</option>
              {industries.map((industry) => (
                <option key={industry.slug} value={industry.slug}>
                  {industry.name}
                </option>
              ))}
            </select>
          )}
        </FormField>

        <FormField id={fieldId('service')} label="Service interested in" error={errors.service}>
          {(control) => (
            <select {...control} name="service" value={values.service} onChange={onChange('service')} className="field-control">
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
              <option value={NOT_SURE_VALUE}>Not sure yet</option>
            </select>
          )}
        </FormField>

        <div className="sm:col-span-2">
          <FormField
            id={fieldId('description')}
            label="Project description"
            error={errors.description}
            hint={`${values.description.length} / ${DESCRIPTION_MAX}`}
          >
            {(control) => (
              <textarea
                {...control}
                name="description"
                rows={5}
                placeholder="What would you like to build or improve? Mention any existing systems involved."
                value={values.description}
                onChange={onChange('description')}
                onBlur={onBlur('description')}
                className="field-control resize-y"
              />
            )}
          </FormField>
        </div>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === 'not_configured' && (
          <div className="mt-6">
            <Notice tone="warning" title="Your enquiry has not been sent">
              Your details are valid, but this form is not connected to our systems yet, so nothing was submitted.
              {import.meta.env.DEV && ' Set VITE_API_BASE_URL to connect the FastAPI backend.'}
            </Notice>
          </div>
        )}
        {status === 'failed' && (
          <div className="mt-6">
            <Notice tone="error" title="We could not send your enquiry">
              Something went wrong on our side and your enquiry was not delivered. Your details are still here, so please
              try again in a moment{site.contact.isPlaceholder ? '.' : ` or email ${site.contact.email}.`}
            </Notice>
          </div>
        )}
      </div>

      <Button type="submit" disabled={submitting} className="mt-6 w-full sm:w-auto">
        {submitting && <LoaderCircle aria-hidden className="size-4 animate-spin-slow" />}
        {submitting ? 'Submitting' : 'Submit Enquiry'}
      </Button>
    </form>
  );
}

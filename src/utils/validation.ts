import type { EnquiryPayload } from '@/types';

export type EnquiryField = keyof EnquiryPayload;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const DESCRIPTION_MIN = 20;
export const DESCRIPTION_MAX = 2000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?\d{10,15}$/;

const validators: Record<EnquiryField, (value: string) => string | undefined> = {
  name: (value) => (value.length < 2 ? 'Please enter your full name.' : undefined),
  company: (value) => (value.length < 2 ? 'Please enter your company name.' : undefined),
  email: (value) => {
    if (!value) return 'Please enter your business email.';
    return EMAIL_PATTERN.test(value) ? undefined : 'Please enter a valid email, such as name@company.com.';
  },
  phone: (value) => {
    if (!value) return 'Please enter your phone number.';
    return PHONE_PATTERN.test(value.replace(/[\s()-]/g, ''))
      ? undefined
      : 'Please enter a valid number with 10 to 15 digits, including the country code if outside India.';
  },
  industry: (value) => (value ? undefined : 'Please select your industry.'),
  service: (value) => (value ? undefined : 'Please select the service you are interested in.'),
  description: (value) => {
    if (value.length < DESCRIPTION_MIN) return `Please describe your project in at least ${DESCRIPTION_MIN} characters.`;
    if (value.length > DESCRIPTION_MAX) return `Please keep your description under ${DESCRIPTION_MAX} characters.`;
    return undefined;
  },
};

export function validateEnquiryField(field: EnquiryField, value: string) {
  return validators[field](value.trim());
}

export function validateEnquiry(values: EnquiryPayload) {
  const errors: EnquiryErrors = {};
  (Object.keys(validators) as EnquiryField[]).forEach((field) => {
    const error = validateEnquiryField(field, values[field]);
    if (error) errors[field] = error;
  });
  return errors;
}

import { isApiConfigured, postJson } from '@/services/api';
import type { EnquiryPayload } from '@/types';

// BACKEND: FastAPI should expose POST /api/v1/enquiries, accept EnquiryPayload as JSON,
// and respond with a 2xx JSON body. Set VITE_API_BASE_URL to enable the real request.
const ENQUIRIES_PATH = '/api/v1/enquiries';

export type EnquiryResult = 'received' | 'not_configured' | 'failed';

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  if (!isApiConfigured) return 'not_configured';

  try {
    await postJson<unknown>(ENQUIRIES_PATH, payload);
    return 'received';
  } catch {
    return 'failed';
  }
}

import { getAuthMock } from '@/shared/services/api/hooks/auth/auth.msw';

export const handlers = [...getAuthMock()];

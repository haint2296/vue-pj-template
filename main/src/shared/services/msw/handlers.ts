import { getAuthMock } from '@/shared/services/api/hooks/auth/auth.msw';
import { getProductsMock } from '../api/hooks/products/products.msw';
import { getTasksMock } from '../api/hooks/tasks/tasks.msw';

export const handlers = [...getProductsMock(), ...getAuthMock(), ...getTasksMock()];

import type { PostLoginBody } from '@/shared/services/api/models';

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormPayload = PostLoginBody;

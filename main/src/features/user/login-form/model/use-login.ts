import { usePostLogin } from '@/shared/services/api';

import { useRouter } from 'vue-router';

type UseLoginReturn = {
  login: ReturnType<typeof usePostLogin>['mutate'];
  isPending: ReturnType<typeof usePostLogin>['isPending'];
};

export function useLogin(): UseLoginReturn {
  const router = useRouter();
  const { mutate: login, isPending } = usePostLogin({
    mutation: {
      onSuccess: () => {
        router.push('/');
      },
    },
  });

  return { login, isPending };
}

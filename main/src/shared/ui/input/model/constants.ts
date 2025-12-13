import type { AppInputProps } from './type';

export const appInputDefaultProps = {
  placeholder: '',
  class: '',
  autocomplete: 'off',
  type: 'text',
} as const satisfies AppInputProps;

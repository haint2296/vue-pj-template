export type PathType = {
  [key: string]: {
    path: string | undefined;
    name: string;
    meta: {
      title: string;
      requiresAuth: boolean;
      keepAlive?: boolean;
    };
  };
};

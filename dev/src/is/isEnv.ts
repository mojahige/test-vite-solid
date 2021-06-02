export const isTestEnv = (): boolean => {
  return globalThis.process?.env?.NODE_ENV === 'test';
};

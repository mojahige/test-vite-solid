export const isTest = (): boolean => {
  return globalThis.process?.env?.NODE_ENV === 'test';
};

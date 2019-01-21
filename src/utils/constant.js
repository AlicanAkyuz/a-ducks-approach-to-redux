export const apiConstants = [
  'REQUEST',
  'SUCCESS',
  'FAILURE',
];

export const createConstants = (namespace, prefix = null) => (...constants) => (
  constants.reduce((result, constant) => ({
    [constant.toUpperCase()]: `${namespace}/${(prefix) ? `${prefix.toUpperCase()}_` : ''}${constant.toUpperCase()}`,
    ...result,
  }), {})
);

export const createApiConstants = (...args) => (
  createConstants(...args)(...apiConstants)
);

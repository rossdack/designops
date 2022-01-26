/**
 * Generate a 'unique' ID
 * @param {*} prefix
 * @returns
 */
function generateId(prefix = '_') {
  return `${prefix}${Math.floor((1 + Math.random()) * 0x1000)
    .toString(16)
    .substring(1)}`;
}

export { generateId };

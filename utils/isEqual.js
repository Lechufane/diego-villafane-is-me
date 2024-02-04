/**
 * Deep equality check for two objects.
 * Note: This function is not suitable for comparing objects with nested properties.
 * It works well for flat objects where properties are simple.
 * @param {object} obj1 - The first object for comparison.
 * @param {object} obj2 - The second object for comparison.
 * @returns {boolean} - Returns true if the objects are deeply equal, otherwise false.
 */

export const isEqual = (obj1, obj2) => {
  // Get the keys of the first and second objects.
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the number of keys is different, the objects are not equal.
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if every key-value pair in obj1 is equal to the corresponding pair in obj2.
  return keys1.every((key) => obj1[key] === obj2[key]);
};

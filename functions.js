
const flattenObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";
    typeof obj[k] === "object"
      ? Object.assign(acc, flattenObject(obj[k], pre + k))
      : (acc[pre + k] = obj[k]);
    return acc;
  }, {});

const generateQuerystring = (obj) => {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
};

module.exports = { flattenObject, generateQuerystring };
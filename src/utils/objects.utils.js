export const groupBy = (array, key, nestedKey) =>
  array.reduce((hash, obj) => {
    if (obj[key][nestedKey] === undefined) return hash
    return Object.assign(hash, {
      [obj[key][nestedKey]]: (hash[obj[key][nestedKey]] || []).concat(obj)
    })
  }, {})

export const sortPropertiesByValue = object =>
  Object.keys(object)
    .map(k => ({ key: k, value: object[k] }))
    .sort((a, b) => b.value.length - a.value.length)

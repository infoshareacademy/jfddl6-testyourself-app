export const unifyString = string => (
  string
    .toLowerCase()
    .replace(/\s/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
)

export const mapObjectToArray = (obj) => (
  Object.entries(obj || {})
    .map(([key, value]) => (
      typeof value === 'object' ?
        { ...value, key }
        :
        { key, value }
    ))
)
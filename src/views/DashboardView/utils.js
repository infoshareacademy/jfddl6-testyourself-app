export const mapObjectToArray = (obj) => (
  Object.entries(obj || {})
    .map(([key, value]) => (
      typeof value === 'object' ?
        { ...value, key }
        :
        { key, value }
    ))
)

export function randomColor() {
  let rc = "#";
  for (let i = 0; i < 6; i++) {
    rc += Math.floor(Math.random() * 16).toString(16);
  }
  return rc;
}


export default mapObjectToArray  
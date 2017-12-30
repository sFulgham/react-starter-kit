export function convertToObj(arr) {
  let convertedObj = arr.reduce((acc,curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
  return convertedObj;
}
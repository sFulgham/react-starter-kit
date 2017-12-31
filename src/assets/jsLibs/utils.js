export function convertToObj(arr) {
  let convertedObj = arr.reduce((acc,curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
  return convertedObj;
}

export function formatDate(dateString) {
  return new Date(dateString).toDateString();
}

export function debounceInput(selection, getCurrentVal, success){
  setTimeout(() => {
    if(selection === getCurrentVal())
      success();
  }, 300);
}

export function filterObjCollection(collection, match){
  return Object.values(collection)
               .filter(val => val.toString().toLowerCase().indexOf(match.toString().toLowerCase()) > -1)
               .length > 0;
}
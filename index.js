var recipes = new Object ({eggs: '3 eggs', flour: '2 cups of flour', vanilla: '1 tea spoon of vanilla', oil: '3 table spoons of oil'})

function updateObjectWithKeyAndValue(object, key, value){
  //returns an object with the orignal key value pairs and the new key value pair
  //it does not modify the original object, but rather returns a clone with the new data
  return Object.assign({}, object, { [key]: value });

}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  //deletes `key` from a clone of object and returns the new object (it is non-destructive)
  //does not modify the original object (it is non-destructive)
  var newObj = destructivelyDeleteFromObjectByKey(object, key);
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key){
  //returns object without the delete key/value pair:
  // modifies the original object
  return newObj;
}

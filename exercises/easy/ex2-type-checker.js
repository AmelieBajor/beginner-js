function showAllTypes() {
  /* Create a function that outputs the typeof for:
  objects, arrays, strings, numbers, booleans, null, undefined, and NaN It should return an object containing all these types */


const code = {

object:typeof{},
array:typeof[],
string:typeof"",
number:typeof 1,
boolean:typeof true,
nullValue:typeof null,
undefinedValue:typeof undefined,
nanValue:typeof NaN

}

  //const object = {};
  //const array = [];
  //const string = "";
  //const number = 1;
  //const boolean = true;
  //const nullValue = null;
  //const undefinedValue = undefined;
  //const nanValue = NaN;

  

  //console.log(typeof object, typeof array, typeof string, typeof number, typeof boolean, typeof nullValue, typeof undefinedValue, typeof nanValue);
  //const code = typeof{object, array, string, number, boolean, nullValue, undefinedValue, nanValue};


  console.log(code);

  return{};
}
showAllTypes();


module.exports = showAllTypes;

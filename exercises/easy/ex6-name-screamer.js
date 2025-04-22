function screamName(name) {
  /* take a name as input and return it in ALL CAPS with exclamation marks */
 
  const nameUpper = name.toUpperCase();
  const nameScream = nameUpper + "!!!";
  console.log(nameScream);
  return nameScream;
}

screamName("John Doe");


module.exports = screamName;

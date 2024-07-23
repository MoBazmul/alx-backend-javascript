export default function appendToEachArrayValue(array, appendString) {
  arrayEnd = [];
  for (value of array) {
    arrayEnd.push(`${appendString}${value}`);
  }

  return arrayEnd;
}


export default function returnHowManyArguments(...args) {
  count = 0
  for (arg of args) {
    count = count + 1;
  }
  return count;
}


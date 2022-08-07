export const isSpacesOnly = (str: string): boolean => {
  let numberOfBlanks: number = 0;
  for (let x = 0; x < str.length; x++) {
    if (str[x] === " ") {
      numberOfBlanks++
    }
  }
  if (numberOfBlanks === str.length) {
    return true
  } else {
    return false
  }
}
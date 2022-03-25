export const checkIfDataIsFilled = (target) => {
  let foundEmptyField = false;
  for (let field of target) {
    if (field.type != "submit")
      if (field.value) {
        continue;
      } else {
        foundEmptyField = true;
        break;
      }
  }
  console.log(foundEmptyField);
  return !foundEmptyField;
};

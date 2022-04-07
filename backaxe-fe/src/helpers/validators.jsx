export const checkIfDataIsFilled = (target) => {
  let foundEmptyField = false;
  for (let field of target) {
    if (field.type != "submit") console.log(field.value);
    if (field.value) {
      continue;
    } else {
      foundEmptyField = true;
      break;
    }
  }
  console.log("Found=", foundEmptyField);
  return !foundEmptyField;
};

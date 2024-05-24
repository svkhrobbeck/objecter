import { IStringKeyProps } from "../types";

const filterObjectFields = (object: IStringKeyProps, ...keys: string[]) => {
  const cloned: IStringKeyProps = JSON.parse(JSON.stringify(object));

  keys.forEach((key) => {
    if (cloned.hasOwnProperty(key)) {
      delete cloned[key];
    }
  });

  return cloned;
};

export default filterObjectFields;

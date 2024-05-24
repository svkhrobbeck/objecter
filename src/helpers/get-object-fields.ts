import { IStringKeyProps } from "../types";

const getObjectFields = (object: IStringKeyProps, ...keys: string[]) => {
  const cloned: IStringKeyProps = JSON.parse(JSON.stringify(object));
  const newObject: IStringKeyProps = {};

  keys.forEach((key) => {
    if (typeof key === "string" && cloned.hasOwnProperty(key) && cloned[key]) {
      newObject[key] = cloned[key];
    }
  });

  return newObject;
};

export default getObjectFields;

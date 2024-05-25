import { IStringKeyProps } from "../types";

const createObjectEmptyString = (...keys: string[]) => {
  const object: IStringKeyProps = {};

  keys.forEach(key => {
    object[key] = "";
  });

  return object;
};

export default createObjectEmptyString;

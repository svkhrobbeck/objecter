import { IStringKeyProps } from "../types";

const createObjectEmptyString = <T extends string[]>(...keys: T): { [K in T[number]]: string } => {
  const object: IStringKeyProps = {};

  keys.forEach(key => {
    object[key] = "";
  });

  return object as { [K in T[number]]: string };
};

export default createObjectEmptyString;

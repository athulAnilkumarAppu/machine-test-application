import { axiosBasicInstance } from "../axios/Interceptor";

export const getContinentData = () => {
  return axiosBasicInstance.get(
    "https://restcountries.com/v2/all?fields=name,region,flag",
    {}
  );
};

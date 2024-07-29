import { useGetSuffix } from "./useGetSuffix";

const useGetSuffixArray = (name: string) => {
  const nameData = [
    useGetSuffix(name, 1),
    useGetSuffix(name, 2),
    useGetSuffix(name, 3),
    useGetSuffix(name, 4),
  ];

  return nameData as string[];
};

export default useGetSuffixArray;

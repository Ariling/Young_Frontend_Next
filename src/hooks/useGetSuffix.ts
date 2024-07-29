export const useGetSuffix = (name: string, step: number): string => {
  const lastChar = name.charAt(name.length - 1);
  const lastCharCode = lastChar.charCodeAt(0);

  if (lastCharCode < 44032 || lastCharCode > 55203) {
    switch (step) {
      case 1:
      case 5:
        return "는";
      case 2:
        return "가";
      case 3:
        return "와";
      case 4:
        return "를";
      default:
        return "는"; // 기본값 설정
    }
  }

  const isSuffixExists = (lastCharCode - 44032) % 28 !== 0;

  switch (step) {
    case 1:
    case 5:
      return isSuffixExists ? "은" : "는";
    case 2:
      return isSuffixExists ? "이" : "가";
    case 3:
      return isSuffixExists ? "과" : "와";
    case 4:
      return isSuffixExists ? "을" : "를";
    default:
      return isSuffixExists ? "은" : "는"; // 기본값 설정
  }
};

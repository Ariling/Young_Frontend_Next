
export const useGetSuffix = (name : string) => {
    const lastChar = name.charAt(name.length - 1);
    const lastCharCode = lastChar.charCodeAt(0);
    if (lastCharCode < 44032 || lastCharCode > 55203) {
      return "는"; // 한글이 아닌 경우에는 '이'를 반환
    }
    return (lastCharCode - 44032) % 28 === 0 ? "는" : "은";
  };


export const useGetSuffix = (name : string, step : number) => {
    const lastChar = name.charAt(name.length - 1);
    const lastCharCode = lastChar.charCodeAt(0);
    if (lastCharCode < 44032 || lastCharCode > 55203) {
      switch(step){
        case 1:
          return "는";
        case 2:
          return "가";
        case 3:
          return "와";
        case 4:
          return "를";
        case 5:
          return "는";
      } 
    }
    switch(step){
      case 1:
        return (lastCharCode - 44032) % 28 === 0 ? "는" : "은";
      case 2:
        return (lastCharCode - 44032) % 28 === 0 ? "가" : "이";
      case 3:
        return (lastCharCode - 44032) % 28 === 0 ? "와" : "과";
      case 4:
        return (lastCharCode - 44032) % 28 === 0 ? "를" : "을";
      case 5:
        return (lastCharCode - 44032) % 28 === 0 ? "는" : "은";
    }
  };

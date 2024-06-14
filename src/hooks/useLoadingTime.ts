import { useEffect, useState } from "react";

export function useLoadingTime(delay : number) {
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(true);
      }, delay);
  
      return () => clearTimeout(timer);
    }, [delay]);
  
    return loading;
  }
  
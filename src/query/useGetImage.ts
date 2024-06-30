import { IMG_CALL_URL } from "@/config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: IMG_CALL_URL,
  responseType: "blob",
});

const useGetImage = (imgNum: string) => {
  const fetchImage = async () => {
    const response = await axiosInstance.get<Blob>(`${imgNum}.png`);

    return URL.createObjectURL(response.data);
  };

  const { data: imgUrl = "" } = useQuery<string>({
    queryKey: ["get-image", imgNum],
    queryFn: fetchImage,
  });

  return { imgUrl };
};

export default useGetImage;

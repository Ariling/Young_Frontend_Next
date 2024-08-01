import { IMG_CALL_URL } from "@/config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

const axiosInstance = axios.create({
  baseURL: IMG_CALL_URL,
  responseType: "blob",
});

const useGetImage = (imgNum: string) => {
  const router = useRouter();
  if (imgNum === "") {
    alert("존재하지 않는 이미지넘버입니다");
    router.reload();
  }
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

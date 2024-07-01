import { GetServerSideProps } from "next";
import { BASE_URL } from "@/config";
import axios from "axios";
import HomePageCompo from "@/components/home/HomePageCompo";

interface IProps {
  props: TProps;
}

type TProps = {
  hostName: string;
  message: string;
};

export default function Home({ props }: IProps) {
  return (
    <main
      className={`flex flex-col items-center justify-center p-7 w-full min-h-screen`}
    >
      <HomePageCompo hostName={props.hostName} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<{ props: TProps }> = async (
  context
) => {
  // 이럴 땐 query를 해야한다. params는 /뒤에 해당하는거라고 보면 된다. [hostId].tsx 이런식으로!
  const hostId = context.query.hostId as string | undefined;
  if (!hostId || hostId === "") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const API_URL = `${BASE_URL}/names/hosts?hostId=${hostId}`;

  const res = await axios.get(API_URL);
  const props = res.data;

  if (props === null) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      props,
    },
  };
};

import { WhiteBox } from "@/styles/hostStyle";
import React, { useEffect, useState } from "react";
import { styled } from "twin.macro";
import File from "@/svg/file.svg";
import Pagination from "../utils/Paginatioin";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useGetPageResult } from "@/apis/host";
import { useHostResultStore } from "@/store/hostresult";
import { useUserStore } from "@/store/user";

const HostPagination = () => {
  const [pageNum, setPageNum] = useState(1);
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["host-resultPage", pageNum],
    queryFn: useGetPageResult,
  });
  const setData = useHostResultStore.use.setData();
  const setUser = useUserStore.use.setUser();
  const userInfo = useUserStore.getState().userInfo;
  useEffect(() => {
    if (!data) {
      setData({
        guests: [],
        page: 1,
        total: 1,
      });
    } else {
      setData({
        guests: data.guests,
        page: data.page,
        total: data.total,
      });
    }
  }, [data]);
  return (
    <>
      <WhiteBox isStatistic className="mb-4">
        {!isLoading && data && data.guests && Array.isArray(data.guests) ? (
          <>
            <TableHeaderContainer>
              <NicknameBox>
                <HeaderText>닉네임</HeaderText>
              </NicknameBox>
              <AnswerBox>
                <HeaderText>답변</HeaderText>
              </AnswerBox>
            </TableHeaderContainer>
            {data.guests
              .reverse()
              .slice(pageNum * 6 - 6, pageNum * 6)
              .map((guest: { id: string; name: string }) => (
                <TableListContainer key={guest!.id}>
                  <NicknameBox>
                    <ListText>{guest.name}</ListText>
                  </NicknameBox>
                  <AnswerBox>
                    <ListText>
                      <File
                        onClick={() => {
                          setUser(guest.id);
                          router.push(
                            `/hostResult/${guest.id}?name=${guest.name}&host=${userInfo.hostName}`
                          );
                        }}
                      />
                    </ListText>
                  </AnswerBox>
                </TableListContainer>
              ))}
          </>
        ) : (
          <div>페이지 불러오는 중</div>
        )}
        <Pagination
          totalPageNum={Math.ceil(data.total / 5)}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      </WhiteBox>
    </>
  );
};

export default HostPagination;

const TableHeaderContainer = styled.div`
  display: flex;
  padding: 0.625rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #000;
  width: 100%;
  height: 2.5rem;
`;

const NicknameBox = styled.div`
  display: flex;
  padding-left: 1.25rem;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
`;

const AnswerBox = styled.div`
  display: flex;
  padding: 0rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const HeaderText = styled.div`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TableListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 1.125rem;
  gap: 1rem;
`;

const ListText = styled.div`
  color: var(--BLACK, #1c1c1c);
  font-family: "Spoqa Han Sans Neo";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

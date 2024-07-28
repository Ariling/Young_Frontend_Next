const useGetResultTitleArray = (
  hostNickname: string,
  hostSuffixArray: string[]
) => {
  return [
    `${hostNickname}
    ${hostSuffixArray[0]} OO상이야`,
    `${hostNickname}
    ${hostSuffixArray[1]} 이모지라면`,
    `${hostNickname}
    ${hostSuffixArray[2]} 어울리는 색은...`,
    `${hostNickname}
    ${hostSuffixArray[3]} 처음 봤을 때...`,
    `지금 내가 생각하는
    ${hostNickname}
    ${hostSuffixArray[0]}..`,
  ];
};

export default useGetResultTitleArray;

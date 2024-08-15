const useGetPageRange = (currentPage: number, totalPages: number) => {
  const pageSize = 5;
  const startPage = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
  const endPage = Math.min(startPage + pageSize - 1, totalPages);

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
};

export default useGetPageRange;

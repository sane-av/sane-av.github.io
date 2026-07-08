// sort by date
export const sortByDate = (array: any[]) => {
  const sortedArray = array.sort(
    (a: any, b: any) =>
      new Date(b?.data?.date ?? 0).valueOf() -
      new Date(a?.data?.date ?? 0).valueOf(),
  );
  return sortedArray;
};

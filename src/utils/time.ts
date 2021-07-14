const changeTimeFormatTo12 = (originDate: any) => {
  const formatToDate = new Date(originDate);
  const hour = formatToDate.getHours();
  const type = hour > 11 ? "오후" : "오전";
  const hour12 = (hour + 24) % 12 || 12;
  const minutes = formatToDate.getMinutes();

  const result = `${type} ${hour12}:${minutes}`;
  return result;
};

const timeUtil = { changeTimeFormatTo12 };

export default timeUtil;

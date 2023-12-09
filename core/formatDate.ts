import { formatDistanceToNow, isToday, isYesterday, format } from "date-fns";
import koLocale from "date-fns/locale/ko";

export const formatDate = (date: string) => {
  const _date = new Date(date);
  let displayDate;

  if (isToday(_date)) {
    // 만약 오늘 작성된 글이라면, 상대 시간 표시
    displayDate = formatDistanceToNow(_date, {
      addSuffix: true,
      locale: koLocale,
    }); // 예: "5분 전"
  } else if (isYesterday(_date)) {
    // 어제 작성된 글이라면, "어제" 표시
    displayDate = "어제";
  } else {
    // 그 외의 경우, 날짜 표시
    displayDate = format(_date, "yyyy.MM.dd");
  }

  return displayDate;
};

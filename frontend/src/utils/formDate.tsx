export function formDate(date: string) {
  const [year, month, day] = date.split("-");
  const displayDate = `${day}.${month}.${year}`;
  return displayDate;
}

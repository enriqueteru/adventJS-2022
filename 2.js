function countHours(year, holidays) {
  let count = 0;

  const checkDate = (date, year) => {
    const newDate = new Date(`${year}/${date}`);
    const _day = new Date(newDate).getDay();

    if ((year % 400 === 0) === true) {
      newDate.setDate(newDate.getDate() + 1);
      console.log(newDate);
    }
    isCount = _day === 0 || _day === 6 ? 0 : 1;
    return isCount;
  };

  holidays.forEach((date) => (count += checkDate(date, year)));
  return count * 2;
}

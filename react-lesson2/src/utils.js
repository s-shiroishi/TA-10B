export const generateYearOptions = () => {
    const options = [];
    const currentYear = new Date().getFullYear();
    for (let year = 1900; year <= currentYear; year++) {
      let era;
      if (year >= 2019) {
        era = `(令和${year - 2018})`;
      } else if (year >= 1989) {
        era = `(平成${year - 1988})`;
      } else if (year >= 1926) {
        era = `(昭和${year - 1925})`;
      } else {
        era = "";
      }
      options.push({ value: year, label: `${year} ${era}` });
    }
    return options;
  };

  export const generateMonthOptions = () => {
    const options = [];
    for(let month=1; month<=12; month++){
      options.push({value: month, label: month});
    }
    return options;
  };

  export const generateDayOptions = (year, month) => {
    const options = [];
    const days = new Date(year, month, 0).getDate();
    for(let day=1; day<=days; day++){
      options.push({value: day, label: day});
    }
    return options;
  };
export const maskDate = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "");
    const match = cleanedValue.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
    if (match) {
      let formattedDate = "";
      if (match[1]) {
        formattedDate += match[1];
        if (match[2]) {
          formattedDate += `/${match[2]}`;
          if (match[3]) {
            formattedDate += `/${match[3]}`;
          }
        }
      }
      return formattedDate;
    }
    return value;
  };
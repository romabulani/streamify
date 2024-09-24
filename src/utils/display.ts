export const convertCamelCaseToLabel = (camelCaseString: string) => {
  return (
    camelCaseString
      // Insert space before any uppercase letters
      .replace(/([A-Z])/g, " $1")
      // Capitalize the first letter of the string
      .replace(/^./, (str) => str.toUpperCase())
  );
};

export const convertDateToShortFormat = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
};

export const convertDateToLongFormat = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
};

export const formatCount = (count: any) => {
    if (count >= 1_000_000_000) {
      return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (count >= 1_000_000) {
      return (count / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (count >= 1_000) {
      return (count / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
      return count.toString();
    }
  }

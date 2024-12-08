function dateFormating(data) {
  if (!(date instanceof Date)) {
    return "Invalid date";
  }

  const day = String(date.getDate()).padStart(2, "0"); // Ensures 2 digits for the day
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = String(date.getFullYear()).slice(-2); // Get the last 2 digits of the year
  var formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
}

export default dateFormating;

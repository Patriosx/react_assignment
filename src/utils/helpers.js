export function formatDate(date) {
  const myDate = new Date(date);
  var options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return myDate.toLocaleDateString("en-US", options);
}
export function getYear(date) {
  const myDate = new Date(date);
  var options = {
    year: "numeric",
  };

  return myDate.toLocaleDateString("en-US", options);
}

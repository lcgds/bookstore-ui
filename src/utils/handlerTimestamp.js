export class HandlerTimeStamp{
  formatTimestampToDateHour(timestamp) {
    if (!timestamp) return "";

    const clean = timestamp.replace(/(\.\d{3})\d+/, "$1");
    const date = new Date(clean);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  }
}
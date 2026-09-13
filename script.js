function showTime() {
  const timeElement = document.getElementById("currentTime");
  if (!timeElement) return;

  timeElement.textContent = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date());
}

showTime();
setInterval(showTime, 1000);

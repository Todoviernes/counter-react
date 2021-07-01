if ("serviceWorker" in navigator) {
  console.log("Service Ok");
  navigator.serviceWorker.register("./serviceWorker.js");
}

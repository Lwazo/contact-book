const rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
  const key = localStorage.getItem("apiKey");
  if (!key) {
    window.location = "enter-api-key.html";
    return "";
  }
  return key;
}
const form = document.querySelector(".url-form");
const result = document.querySelector(".result-section");
form.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector(".url-input");
  fetch("/urlapi", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      longUrl: input.value,
    })
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data.shortUrl)
      result.innerHTML = ""
      result.innerHTML = `
     <div class="result">
      <a id="short-url" target="_blank" class="short-url" href="${data.shortUrl}"> ${data.shortUrl}</a>
    </div>`
    })
    .catch(console.error)
});
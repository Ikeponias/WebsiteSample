const form = document.querySelector("#consultationForm");
const statusMessage = document.querySelector("#formStatus");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    statusMessage.textContent = "未入力の項目を確認してください。";
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const displayName = name || "お客様";

  statusMessage.textContent = `${displayName}の相談内容を送信準備しました。正式な送信先が決まり次第、このフォームに接続できます。`;
  form.reset();
});

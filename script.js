/* =========================
   COPY TEXT FUNCTION
========================= */
function copyText(id){
  const el = document.getElementById(id);

  if(!el){
    alert("Data tidak ditemukan");
    return;
  }

  const text = el.innerText.trim();

  navigator.clipboard.writeText(text).then(() => {
    alert("Berhasil disalin:\n" + text);
  }).catch(() => {
    alert("Gagal menyalin, silakan salin manual");
  });
}
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const box = btn.parentElement;
    box.classList.toggle("active");
  });
});


/* =========================
   COMING SOON ALERT
========================= */
function comingSoon(){
  alert("Halaman belum tersedia 🚀\nAkan segera hadir!");
}
















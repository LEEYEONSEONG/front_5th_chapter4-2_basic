function showTopBar() {
  const country = "France";
  const vat = 20;
  const countryBar = document.querySelector("section.country-bar");

  if (countryBar) {
    setTimeout(() => {
      countryBar.innerHTML = `<p>Orders to <strong>${country}</strong> are subject to <strong>${vat}%</strong> VAT</p>`;
      countryBar.classList.remove("hidden");
    }, 1000);
  }
}

// Initialize only if DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showTopBar);
} else {
  showTopBar();
}

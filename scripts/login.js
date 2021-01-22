const searchBtn = document.querySelector(".searchBtn");
const personInfoContainer = document.querySelector(".personScanInfo");

function searchBsn() {
	personInfoContainer.style.opacity = 1;
}

searchBtn.addEventListener("click", searchBsn);
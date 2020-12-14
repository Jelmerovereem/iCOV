const innerContainer = document.querySelector(".inner-container");
const chatOptions = document.querySelector(".chat-options");
const sendBtn = document.querySelector(".send-button");


function sendMsg() {
	let relatieHtml = `
		<div class="chat-bubble right">
			<p>Ik wil graag een relatie ophalen.</p>
		</div>
	`;
	let niksHtml = `
		<div class="chat-bubble right">
			<p>Ik heb geen vraag.</p>
		</div>
	`;
	let stevenHtml = `
		<div class="chat-bubble right">
			<p>Ik wil graag de data van <strong>Steven King</strong>.</p>
		</div>
	`;
	let checkedMsgRadio = document.querySelector(`input[name="chat-option"]:checked`);
	console.log(checkedMsgRadio)
	if (!checkedMsgRadio) {
		alert("Check eerst een optie aan!")
	} else {
		if (checkedMsgRadio.value === "relatie") {
			innerContainer.insertAdjacentHTML("beforeend", relatieHtml);
		}
		if (checkedMsgRadio.value === "niks") {
			innerContainer.insertAdjacentHTML("beforeend", niksHtml)
		}
		if (checkedMsgRadio.value === "steven") {
			innerContainer.insertAdjacentHTML("beforeend", stevenHtml);
		}
		respond(checkedMsgRadio.value);
	}
}

function respond(subject) {
	let respondRelatie = `
		<div class="chat-bubble left">
			<p>Dat kan!</p>
		</div>
		<div class="chat-bubble left">
			<p>Welke relatie wil je ophalen?</p>
		</div>
	`;
	let respondNiks = `
		<div class="chat-bubble left">
			<p>Oke! Dan wens ik je nog een fijne dag.</p>
		</div>
	`;
	let respondSteven = `
		<div class="chat-bubble left">
			<p>Ik ga even voor je zoeken in de database naar <strong>Steven King</strong>!</p>
		</div>
	`;
	if (subject === "relatie") {
		innerContainer.insertAdjacentHTML("beforeend", respondRelatie);
	}
	if (subject === "niks") {
		innerContainer.insertAdjacentHTML("beforeend", respondNiks);
	}
	if (subject === "steven") {
		innerContainer.insertAdjacentHTML("beforeend", respondSteven);
	}
	changeOptions(subject);
}

function changeOptions(subject) {
	chatOptions.innerHTML = "";
	if (subject === "relatie") {
		let relatieOptions = `
			<input type="radio" id="steven" name="chat-option" value="steven">
			<label for="steven">Steven King</label>
		`;
		chatOptions.innerHTML = relatieOptions;
	}
}

sendBtn.addEventListener("click", sendMsg);
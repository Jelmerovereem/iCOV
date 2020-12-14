const innerContainer = document.querySelector(".inner-container");
const chatOptions = document.querySelector(".chat-options");
const sendBtn = document.querySelector(".send-button");
const micBtn = document.querySelector(".mic");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var names = ['neena', 'lex'];
var grammar = '#JSGF V1.0; grammar colors; public <name> = ' + names.join(' | ') + ' ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


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
	let meerRelatiesHtml = `
		<div class="chat-bubble right">
			<p>Ik wil graag de connecties van Steven King zien.</p>
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
		if (checkedMsgRadio.value === "meerRelaties") {
			innerContainer.insertAdjacentHTML("beforeend", meerRelatiesHtml);
			scrollDown();
		}
		respond(checkedMsgRadio.value);
	}
}

function sendSpeechMsg(name) {
	console.log(name);
	let lexHtml = `
		<div class="chat-bubble right">
			<p>Ik wil graag de data van <strong>Lex</strong> opvragen.</p>
		</div>
	`;
	let neenaHtml = `
		<div class="chat-bubble right">
			<p>Ik wil graag de data van <strong>Neena</strong> opvragen.</p>
		</div>
	`;
	let onbekendHtml = `
		<div class="chat-bubble right">
			<p>Ik wil graag de data van <strong>${name}</strong> opvragen.</p>
		</div>
	`
	if (name === "Lex") {
		innerContainer.insertAdjacentHTML("beforeend", lexHtml);
		scrollDown();
		respond(name);
	} else if (name === "Nina") {
		innerContainer.insertAdjacentHTML("beforeend", neenaHtml);
		scrollDown();
		respond(name);
	} else {
		innerContainer.insertAdjacentHTML("beforeend", onbekendHtml);
		scrollDown();
		respond("onbekend");
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
	let respondSteven1 = `
		<div class="chat-bubble left">
			<p>Ik ga even voor je zoeken in de database naar <strong>Steven King</strong>!</p>
		</div>
	`;
	let respondSteven2 = `
		<div class="chat-bubble left">
			<h2>Steven King</h2>
			<p><strong>Voornaam:</strong> Steven</p>
			<p><strong>Achternaam:</strong> King</p>
			<p><strong>Geboortedatum:</strong> 8 April 1955 (65 jaar)</p>
			<p><strong>Gender:</strong> Man</p>
			<p><strong>Functie:</strong> Manager</p>
		</div>
	`;
	let respondMeerRelaties = `
		<div class="chat-bubble left">
			<input type="radio" id="neena" value="neena">
			<label for="neena">Neena Kochhar</label>
			<input type="radio" id="lex" value="lex">
			<label for="lex">Lex de Haan</label>
		</div>
	`;
	let respondLexHtml = `
		<div class="chat-bubble left">
			<p>Ik ga even voor je zoeken in de database naar <strong>Lex de Haan</strong>!</p>
		</div>
	`;
	let respondNeenaHtml = `
		<div class="chat-bubble left">
			<p>Ik ga even voor je zoeken in de database naar <strong>Neena Kochhar</strong>!</p>
		</div>
	`;
	let onbekendHtml = `
		<div class="chat-bubble left">
			<p>Sorry, deze naam is geen relatie of ik heb je niet goed verstaan.</p>
		</div>
	`;
	if (subject === "relatie") {
		innerContainer.insertAdjacentHTML("beforeend", respondRelatie);
	}
	if (subject === "niks") {
		innerContainer.insertAdjacentHTML("beforeend", respondNiks);
	}
	if (subject === "steven") {
		innerContainer.insertAdjacentHTML("beforeend", respondSteven1);
		scrollDown();
		setTimeout(() => {
			innerContainer.insertAdjacentHTML("beforeend", respondSteven2)
			scrollDown();
		}, 1000)
	}
	if (subject === "meerRelaties") {
		setTimeout(() => {
			innerContainer.insertAdjacentHTML("beforeend", respondMeerRelaties);
			scrollDown();
		}, 1000)
	}
	if (subject === "Lex") {
		setTimeout(() => {
			innerContainer.insertAdjacentHTML("beforeend", respondLexHtml);
			scrollDown();
		}, 1000)
	}
	if (subject === "Nina") {
		setTimeout(() => {
			innerContainer.insertAdjacentHTML("beforeend", respondNeenaHtml);
			scrollDown()
		}, 1000)
	}
	if (subject === "onbekend") {
		setTimeout(() => {
			innerContainer.insertAdjacentHTML("beforeend", onbekendHtml);
			scrollDown();
		}, 1000)
	}
	changeOptions(subject);
}

function scrollDown() {
	innerContainer.scrollTop = innerContainer.scrollHeight;
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
	if (subject === "steven") {
		let options = `
			<input type="radio" id="meerRelaties" name="chat-option" value="meerRelaties">
			<label for="meerRelaties">Connecties/relaties</label>
		`;
		chatOptions.innerHTML = options;
	}
}

sendBtn.addEventListener("click", sendMsg);
micBtn.onclick = function() {
	recognition.start();
	console.log("je kan praten");
}

recognition.onresult = function(event) {
	var name = event.results[0][0].transcript;
	/*diagnostic.textContent = 'Result received: ' + name + '.';*/
	console.log(name);
	sendSpeechMsg(name);
	console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  console.log('I didnt recognise that color.');
}
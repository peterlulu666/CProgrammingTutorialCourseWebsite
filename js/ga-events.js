var pageTitle = document.title;

function addEventListenerbyClass(className, event, fn) {
	var list = document.getElementsByClassName(className);
	for (var i = 0, length = list.length; i < length; i++) {
		list[i].addEventListener(event, fn, false);
	}
}

function sendAccordionGAEvent() {
	var category = "Accordion Click";
	var accordionTitle = this.innerHTML;
	console.log("eventCategory: " + category + " | eventAction: " + pageTitle + " | eventLabel: " + accordionTitle);
  ga('send', 'event', category, pageTitle, accordionTitle);
}

addEventListenerbyClass('accordion-label', 'click', sendAccordionGAEvent);

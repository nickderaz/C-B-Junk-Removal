const year = new Date().getFullYear();
document.title = `C & B Junk Removal | ${year}`;

const quoteForm = document.querySelector("#quote-form");

if (quoteForm) {
	quoteForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const formData = new FormData(quoteForm);
		const name = formData.get("name")?.toString().trim() || "";
		const phone = formData.get("phone")?.toString().trim() || "";
		const email = formData.get("email")?.toString().trim() || "";
		const service = formData.get("service")?.toString().trim() || "";
		const address = formData.get("address")?.toString().trim() || "";
		const details = formData.get("details")?.toString().trim() || "";

		const subject = `Request a Quote${name ? ` - ${name}` : ""}`;
		const body = [
			"New quote request from the website:",
			"",
			`Name: ${name}`,
			`Phone: ${phone}`,
			`Email: ${email}`,
			`Service needed: ${service}`,
			`Property address: ${address}`,
			"",
			"Description:",
			details,
		].join("\n");

		const mailto = `mailto:jburich2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
	});
}
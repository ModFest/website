export function formatPlural(text: String, amount: Number) {
	// i18n can be a future problem.
	return `${amount} ${amount === 1 ? text : text + 's'}`;
}

function replaceChar(text: any, char: any, value: any) {
	return text.replace(new RegExp(char, "ig"), value);
}

export default replaceChar;

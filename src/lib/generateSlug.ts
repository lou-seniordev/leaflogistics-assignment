import replaceChar from "./replaceChar";

interface SlugProps {
	parent?: string;
	title: string;
}
function generateSlug({ parent = "/", title }: SlugProps) {
	return parent.concat(replaceChar(title, " ", "-"));
}

export default generateSlug;

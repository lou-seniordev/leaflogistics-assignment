type ParamsUtil = Record<string, string>;

function generateEndpoint(path: string, params: ParamsUtil) {
	console.log(path, "check am ");
	return path;
}

export default generateEndpoint;

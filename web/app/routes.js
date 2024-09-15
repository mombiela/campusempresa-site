export function getRouteInfo(url)
{
	if (url.startsWith("#")) url = url.substring(1);
	
	let result = {
		stage: "pre",
		dst: url,
		src: url,
	};	
	return result;
}

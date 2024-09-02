/* *********************************************
   Las routes van de més específiques a menys!!!
   Exemple:
   
   aaa/bbb/ccc
   aaa/bbb
   aaa
// *********************************************/

export const ROUTES = [
	{src:"index/", dst:"github/mombiela/campusempresa/", stage:"prod"},
	{src:"tic/react/", dst:"github/mombiela/campusempresa/", stage:"prod"},
	{src:"tic/html/", dst:"github/mombiela/campusempresa/", stage:"test"},
	{src:"tic/", dst:"github/mombiela/campusempresa/", stage:"pre"},
	
	{src:"about", dst:"about", stage:"pre"},
	{src:"donate", dst:"donate", stage:"test"},
]

export function getRouteInfo(url)
{
	if (url.startsWith("#")) url = url.substring(1);
	
	// Miramos si es una url de cambio
	for (let i = 0; i<ROUTES.length; i++)
	{
		let route = ROUTES[i];
		if (url.startsWith(route.src))
		{
			return route;
		}
	}
	return null;
}

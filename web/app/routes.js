/* *********************************************
   Las routes van de més específiques a menys!!!
   Exemple:
   
   aaa/bbb/ccc
   aaa/bbb
   aaa
// *********************************************/

const ROUTES = [
	{src:"tic/react/", dst:"github/mombiela/campusempresa/react/", stage:"prod"},
	{src:"tic/html/", dst:"github/mombiela/campusempresa/html/", stage:"test"},
	{src:"tic/", dst:"github/mombiela/campusempresa/", stage:"pre"},
	{src:"about", dst:"about", stage:"pre"},
	{src:"donate", dst:"donate", stage:"pre"},
	{src:"contribute", dst:"contribute", stage:"pre"},
	{src:"licence", dst:"licence", stage:"pre"},
	{src:"index", dst:"index", stage:"pre"},
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

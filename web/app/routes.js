const ROUTES = {};

// Rutes directes
ROUTES["about"] 		= {dst:"about", stage:"pre"};
ROUTES["donate"] 		= {dst:"donate", stage:"pre"};
ROUTES["contribute"] 	= {dst:"contribute", stage:"pre"};
ROUTES["licence"] 		= {dst:"licence", stage:"pre"};
ROUTES["index"] 		= {dst:"index", stage:"pre"};

// Rutas con prefix (Las routes van de més específiques a menys!!!)
// Exemple: aaa/bbb/ccc, aaa/bbb, aaa
ROUTES["tic/react/"] 	= {dst:"github/mombiela/campusempresa/react/", stage:"prod", prefix:true};
ROUTES["tic/html/"] 	= {dst:"github/mombiela/campusempresa/html/", stage:"test", prefix:true};
ROUTES["tic/"] 			= {dst:"github/mombiela/campusempresa/", stage:"pre", prefix:true};

for (const property in ROUTES)
{
	let route = ROUTES[property];
	route.src = property;
}

export function getRouteInfo(url)
{
	if (url.startsWith("#")) url = url.substring(1);
	
	if (ROUTES[url]) return ROUTES[url];
	
	// Miramos si es una url de cambio con prefix
	for (const property in ROUTES)
	{
		let route = ROUTES[property];
		if (!route.prefix) continue;
		if (url.startsWith(route.src))
		{
			return route;
		}
	}
	return null;
}

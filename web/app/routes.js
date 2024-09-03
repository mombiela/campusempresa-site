const ROUTES = {};

// Rutes directes
ROUTES["about"] 		= {stage:"pre"};
ROUTES["donate"] 		= {stage:"pre"};
ROUTES["contribute"] 	= {stage:"pre"};
ROUTES["licence"] 		= {stage:"pre"};
ROUTES["index"] 		= {stage:"pre"};
ROUTES["objective"]		= {stage:"pre"};
ROUTES["_default"] 		= {stage:"pre"};

// Rutas TIC
ROUTES["tic/prog_frontend"] = {stage:"pre"};
ROUTES["tic/prog_backend"]  = {stage:"test"};
ROUTES["tic/prog_legacy"]   = {stage:"test"};
ROUTES["tic/prog_full_stack"]   = {stage:"test"};
ROUTES["tic/arq_web"]   = {stage:"test"};
ROUTES["tic/arq_cloud"]   = {stage:"test"};
ROUTES["tic/exp_seg"]   = {stage:"test"};

// Rutas con prefix (Las routes van de més específiques a menys!!!)
// Exemple: aaa/bbb/ccc, aaa/bbb, aaa
ROUTES["tic/react/"] 	= {dst:"github/mombiela/campusempresa/react/", stage:"prod", prefix:true};
ROUTES["tic/html/"] 	= {dst:"github/mombiela/campusempresa/html/", stage:"test", prefix:true};
ROUTES["tic/"] 			= {dst:"github/mombiela/campusempresa/", stage:"pre", prefix:true};

for (const property in ROUTES)
{
	let route = ROUTES[property];
	route.src = property;
	if (!route.dst) route.dst = property;
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

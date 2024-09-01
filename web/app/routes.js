/* *********************************************
   Las routes van de més específiques a menys!!!
   Exemple:
   
   aaa/bbb/ccc
   aaa/bbb
   aaa
// *********************************************/

export const ROUTES = [
	{src:"index/", dst:"github/mombiela/campusempresa/", stage:"prod"},
	{src:"tic/", dst:"github/mombiela/campusempresa/", stage:"prod"},
	{src:"about", dst:"about", stage:"pre"},
	{src:"donate", dst:"donate", stage:"test"},
]

const LITERALS = {
	"es":{
		"about":"Sobre nosotros",
		"donate":"Donaciones",
		"contribute":"Contribuir",
		"licence":"Licencia",
		"copyright":"Todos los derechos reservados",
		"slogan":"Construyendo la socidead de hoy y del mañana",
	},
	"ca":{
		"about":"Sobre nosaltres",
		"donate":"Donacions",
		"contribute":"Contribuir",
		"licence":"Licencia",
		"copyright":"Tots els drets reservats",
		"slogan":"Construint la societat d'avui i del demà",
	}
};

export function getLiterals(lang)
{
	return LITERALS[lang];
}

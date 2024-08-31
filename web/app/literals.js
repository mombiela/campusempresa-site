const LITERALS = {
	"es":{
		"about":"Sobre nosotros"
	},
	"ca":{
		"about":"Sobre nosaltres"
	}
};

export function getLiterals(lang)
{
	return LITERALS[lang];
}
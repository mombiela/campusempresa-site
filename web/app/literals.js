const LITERALS = {
	"ca":{
		"about":"Qui som",
		"donate":"Donacions",
		"contribute":"Contribuir",
		"licence":"Llicència",
		"copyright":"Tots els drets reservats",
		"objective": "El Projecte",
		"slogan":"<cite>Construint la societat d'avui i del demà</cite>",
		"publi1": "Publicitat",
		"publi2": "Aquest espai está destinat a publicitat.",
		"publi3": "Si vols ser un patrocinador nostre <a href='#contact'>contacta amb nosaltres</a> i podràs incloure enllaços en aquesta zona.",
		"publi4": "Grècias per col·laborar!"
	},
	"es":{
		"about":"Quienes somos",
		"donate":"Donaciones",
		"contribute":"Contribuir",
		"licence":"Licencia",
		"copyright":"Todos los derechos reservados",
		"objective": "El Proyecto",
		"slogan":"<cite>Construyendo la socidead de hoy y del mañana</cite>",
		"publi1": "Publicidad",
		"publi2": "Este espacio está destinado a publicidad.",
		"publi3": "Si quieres ser un patrocinador nuestro <a href='#contact'>contacta con nosotros</a> y podrás incluir enlaces en esta zona.",
		"publi4": "¡Gracias por colaborar!"
	}
};

export function getLiterals(lang)
{
	return LITERALS[lang];
}

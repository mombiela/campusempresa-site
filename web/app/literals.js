const LITERALS = {
	"ca":{
		"about":"Sobre nosaltres",
		"donate":"Donacions",
		"contribute":"Contribuir",
		"licence":"Llicència",
		"copyright":"Tots els drets reservats",
		"objective": "El Projecte",
		"slogan":"<cite>Construint la societat d'avui i del demà</cite>",
		"publi1": "Publicitat",
		"publi2": "Aquest espai està destinat a publicitat.",
		"publi3": "Si vols ser patrocinador, contacta amb nosaltres per incloure enllaços en aquesta zona: <a href='mailto:admin@campusempresa.cat'>admin@campusempresa.cat</a> ",
		"publi4": "Gràcies per col·laborar!"
	},
	"es":{
		"about":"Sobre nosotros",
		"donate":"Donaciones",
		"contribute":"Contribuir",
		"licence":"Licencia",
		"copyright":"Todos los derechos reservados",
		"objective": "El Proyecto",
		"slogan":"<cite>Construyendo la sociedad de hoy y del mañana</cite>",
		"publi1": "Publicidad",
		"publi2": "Este espacio está destinado a publicidad.",
		"publi3": "Si quieres ser patrocinador, contáctanos para incluir enlaces en esta zona: <a href='mailto:admin@campusempresa.cat'>admin@campusempresa.cat</a>",
		"publi4": "¡Gracias por colaborar!"
	}
};


export function getLiterals(lang)
{
	return LITERALS[lang];
}

export function setLang(ev)
{
	let elem = $(ev.target);
	//localStorage.setItem("lang", elem.data("lang"));
	sessionStorage.setItem("lang", elem.data("lang")); // Fomentem l'ús del català ;-)
	window.location.reload();
}

export function getLang()
{
	let lang = sessionStorage.getItem("lang");
	if (!lang || (lang != "es" && lang != "ca"))
	{
		lang = "ca"; // TODO Hacer por dominio
		sessionStorage.setItem("lang", lang);
	}
	return lang;
}

export function accept()
{
	Cookies.set('cookies_informed', "OK", {expires: 365});
	$("#cookies_adv").remove();
}

export function checkCookies()
{
	var x = Cookies.get('cookies_informed');
	if (x == "OK") $("#cookies_adv").remove();
}


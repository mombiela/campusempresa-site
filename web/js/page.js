function setLang(ev)
{
	let elem = $(ev.target);
	//localStorage.setItem("lang", elem.data("lang"));
	sessionStorage.setItem("lang", elem.data("lang")); // Fomentem l'ús del català ;-)
	window.location.reload();
}

function getLang()
{
	let lang = sessionStorage.getItem("lang");
	if (!lang || (lang != "es" && lang != "ca"))
	{
		lang = "ca"; // TODO Hacer por dominio
		sessionStorage.setItem("lang", lang);
	}
	return lang;
}

function remove(id)
{
	var elem = document.getElementById(id);
	elem.parentElement.removeChild(elem);
}

function accept()
{
	Cookies.set('cookies_informed', "OK", {expires: 365});
	remove("cookies_adv");
}

function checkCookies()
{
	var x = Cookies.get('cookies_informed');
	if (x == "OK") remove("cookies_adv");
}


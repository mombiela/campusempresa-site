function setLang(ev)
{
	let elem = $(ev.target);
	localStorage.setItem("lang", elem.data("lang"));
	window.location.reload();
}

function getLang()
{
	let lang = localStorage.getItem("lang");
	if (!lang || (lang != "es" && lang != "ca"))
	{
		lang = "es"; // TODO Hacer por dominio
		localStorage.setItem("lang", lang);
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


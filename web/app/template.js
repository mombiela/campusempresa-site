import {getLiterals} from './literals.js';
import {getLang} from './page.js';

let literals = getLiterals(getLang());

const publi = `<h1>${literals.publi1}</h1>
	<p>${literals.publi2}</p>
	<p>${literals.publi3}</p>
	<p>${literals.publi4}</p>`

export const mainConent = `
	<div id="header" class="container-xxl">
		<div class="row">
			<div class="col-8 p-0">
				<h1 class="m-0 p-0">
					<a href="/"><img src="/img/logo_header.png" style="visibility:hidden"></a>
				</h3>
			</div>
			<div class="col-4 p-0 text-end">
				<h2><cite>${literals.slogan}</cite></h2><br>
			</div>
		</div>
	</div>
	<div class="container-xxl" style="margin-top: -1em;">
		<div class="row">
			<div class="col-12 p-0 m-0 text-end">
				<a href="#" id="lnk_lang_es" data-lang="es">Castellano</a><b id="lit_lang_es">Castellano</b>
				|
				<a href="#" id="lnk_lang_ca" data-lang="ca">Català</a><b id="lit_lang_ca">Catala</b>
			</div>
		</div>
	</div>
    <div class="top-bar container-fluid">
		<div class="container-xxl">
			<div class="row">
				<div class="col">
					<a href="#about">${literals.about}</a>
					<a href="#donate">${literals.donate}</a>
					<a href="#contribute">${literals.contribute}</a>
					<a href="#licence">${literals.licence}</a>
				</div>
			</div>
		</div>
    </div>
	
	<div class="container-xxl" id="main_content">
		<div class="row">
			<div class="col-12 col-lg-8">
				<div id="nav1" class="navigation"></div>
				<div id="inner_content"></div>
			</div>
			<div class="col-12 col-lg-4 publi" id="div_publi">
				${publi}
			</div>
		</div>
	</div>
	
    <div class="container-xxl mt-3">
		<div class="row">
			<div class="col">
				<footer>&copy; Copyright 2024. ${literals.copyright}</footer>
			</div>
		</div>
	</div>	
	
	<div id="cookies_adv">
		Fem servir galetes per millorar la teva experiència d'ús i oferir continguts adaptats als teus interessos
        <a href="#" id="btn_accept_cookies" class="button">Entès!</a>
        <a href="cookies.html">Més informació</a>
    </div>	
`;

export const mainEditor = `
	<div id="editor_window" class="container-fluid">
		<div class="row">
			<div class="col-12 p-2">
				<textarea class="w-100" rows="25" id="editor_textarea"></textarea>
			</div>
		</div>
		<div class="row">
			<div class="col-3">
				<button id="btn_refresh">Refresh</button>
				<input type="checkbox" id="check_auto_refresh"> <span style="color:white;">Auto</span>
			</div>
			<div class="col-4 text-center">
				<button id="btn_copy_text">Copy Text</button>
				<button id="btn_reset_local">Reset LOCAL</button>
			</div>
			<div class="col-5 text-end">
				<button id="btn_min">MIN</button>
				<button id="btn_normal">NORMAL</button>
				<button id="btn_max">MAX</button>
				<button id="btn_close">CLOSE</button>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
			</div>
		</div>
	</div>
`;

export const docTemplate = `Document (campusempresa.org/namespace.stxt): Insert a name
	Header:	This is a header
	Subheader: This is a subheader
	Content:
		This is a content, **wiki format!!**
`;

export const docError = `
<style type="text/css">
	body {text-align: center;}
	h1, h2 {font-size: 4em; font-family: monospace; color: rgb(57, 55, 163); margin: 0;}
	h2 {font-size: 2.5em;}
	p {margin-top: 1.5em;}
	a {
		color: rgb(255, 75, 156);
		font-size: 1.5em;
		text-decoration:underline;
	}
</style>
	<h1>500</h1>
	<h2 id="error_text"></h2>
	<p><a href="/">Click here to continue</a></p>
`

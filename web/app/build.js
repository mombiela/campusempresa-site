import { NamespaceRetriever, STXTParser, getUrlContent } from '../js/stxt-parser.min.js';
import { transform, fixUrlsRelativas } from './transform.js';
import { getDefaultValues } from './default.js';
import { getUrlFromHash, getHash } from './utils.js';
import { docError } from './template.js';
import { getLang, checkCookies,accept, setLang } from './page.js';
import { getRouteInfo } from './routes.js';

export async function buildContentFromHashUrl()
{
    const content = $("#content");
    content.empty();
	try
	{
		console.log("antes getHash");
	    const hash = getHash();
		console.log("despues getHash");
		let stxtUrl = getUrlFromHash(hash);
		console.log("getUrlFromHashl ok: " + stxtUrl);
		let contentFromUrl = await getUrlContent(stxtUrl);
		console.log("contentFromUrlok");
		await buildContent(contentFromUrl, stxtUrl);
	}
	catch(exception)
	{
		console.log("Error: " + exception);
		content.append($(docError));
		$("#error_text").text(exception);
	}
}
export async function buildContentFromString(str)
{
    const content = $("#content");
    content.empty();
	try
	{
	    const hash = getHash();
		let stxtUrl = getUrlFromHash(hash);
		await buildContent(str, stxtUrl);
	}
	catch(exception)
	{
		console.log("Error: " + exception);
		content.append($(docError));
		$("#error_text").text(exception);
	}
}

export async function buildContent(content, stxtUrl)
{
	let grammar = await getUrlContent("/namespace.stxt");
	
	// Final
    const namespaceRetriever = new NamespaceRetriever();
	await namespaceRetriever.addGrammarDefinition(grammar);
	
	const parser = new STXTParser(namespaceRetriever);
	const node = (await parser.parse(content))[0];
	
	// Make navigation
	const defaultValues = await getDefaultValues(getHash(), parser, node);

	// Transform page
	transform(node, defaultValues);
	plantuml_runonce();

	// Fix de url's relatvias
	fixUrlsRelativas();
	
	// Insertamos en fuente
	$("#link_source_code").attr("href", stxtUrl);
	
	// Insertamos editor
	let hash = getHash();
	$("#link_editor").attr("href", "/edit.html" + hash);

	// Mathjax
	window["mathReload"]();
	
	// Cookies
    checkCookies();
    $("#btn_accept_cookies").click(accept);
    
    // Lang
	renderLang();
	
	// Stage
	renderStage();
}

function renderLang()
{
    let lang = getLang();
    $("#lnk_lang_es,#lnk_lang_ca").click(setLang);
	if (lang == "es")
	{
		$("#lit_lang_ca").hide();
		$("#lnk_lang_es").hide();
	}
	else // ca
	{
		$("#lit_lang_es").hide();
		$("#lnk_lang_ca").hide();
	}
}

function renderStage()
{
	let route = getRouteInfo(getHash());
	$("body").removeClass("test").removeClass("pre");
	
	if (route)	$("body").addClass(route.stage);
}

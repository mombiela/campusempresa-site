package org.swb.utils;

import org.apache.commons.lang.StringEscapeUtils;

import info.semantictext.LineSplitter;

public class Utils
{
	public String escapeHtml(String text)
	{
		text = text.replaceAll("\\t", "    ");
		return StringEscapeUtils.escapeHtml(text);
	}
    public int parseInt(String text)
    {
        return Integer.parseInt(text);
    }    
    public LineSplitter split(String text)
    {
        return LineSplitter.split(text);
    }
   
}

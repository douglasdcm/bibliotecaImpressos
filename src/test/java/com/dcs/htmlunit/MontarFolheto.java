package com.dcs.htmlunit;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlAnchor;
import com.gargoylesoftware.htmlunit.html.HtmlButton;
import com.gargoylesoftware.htmlunit.html.HtmlForm;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.html.HtmlPasswordInput;
import com.gargoylesoftware.htmlunit.html.HtmlSubmitInput;
import com.gargoylesoftware.htmlunit.html.HtmlTextInput;
import java.util.logging.Logger;
import static net.sourceforge.jwebunit.junit.JWebUnit.*;

import org.junit.Before;
import org.junit.Test;

import net.sourceforge.jwebunit.util.TestingEngineRegistry;
import org.junit.Assert;


public class MontarFolheto {
    
    public HtmlPage page;
    public WebClient webClient;
    public String baseUrl = "http://127.0.0.1:8080";
    
    @Before
    public void prepare() throws Exception {
        webClient = new WebClient(BrowserVersion.FIREFOX_52);
        setTestingEngineKey(TestingEngineRegistry.TESTING_ENGINE_HTMLUNIT); 
        page = webClient.getPage(baseUrl);
    }
    
    @Test
    public void montarFolheto() throws Exception {
     
           // webClient.getOptions().setThrowExceptionOnFailingStatusCode(false);
            
            Assert.assertEquals("Página inicial", page.getTitleText());
            final HtmlAnchor anchor = (HtmlAnchor) page.getElementById("montar_folheto");
            String hrefAtt = anchor.getHrefAttribute();
            String hrefAttRep = hrefAtt.replace("\\", "/");
            String url = baseUrl.concat(hrefAttRep);
            
            page = webClient.getPage(url);
            Assert.assertEquals("Montar folheto", page.getTitleText());
            final HtmlTextInput chaveField = (HtmlTextInput) page.
                    getElementById("nome");
            chaveField.setValueAttribute("Nome teste");
            
            final HtmlTextInput senhaField = (HtmlTextInput) page.
                    getElementById("descricao");
            senhaField.setValueAttribute("Descrição teste");
            
            final HtmlSubmitInput criarFolhetoButton = (HtmlSubmitInput) page.getElementById("criar_folhetos");
            criarFolhetoButton.click();
                    
    }
    
    private static final Logger LOG = Logger.getLogger(MontarFolheto.class.getName());
    
}
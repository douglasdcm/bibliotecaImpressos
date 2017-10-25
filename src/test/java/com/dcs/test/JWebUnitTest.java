package com.dcs.test;
/*
import static net.sourceforge.jwebunit.junit.JWebUnit.assertLinkPresent;
import static net.sourceforge.jwebunit.junit.JWebUnit.assertTitleEquals;
import static net.sourceforge.jwebunit.junit.JWebUnit.beginAt;
import static net.sourceforge.jwebunit.junit.JWebUnit.clickLink;
import static net.sourceforge.jwebunit.junit.JWebUnit.setBaseUrl;
import static net.sourceforge.jwebunit.junit.JWebUnit.setTestingEngineKey;
*/
import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlAnchor;
import com.gargoylesoftware.htmlunit.html.HtmlForm;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.html.HtmlSubmitInput;
import com.gargoylesoftware.htmlunit.html.HtmlTextInput;
import java.util.logging.Logger;
import static net.sourceforge.jwebunit.junit.JWebUnit.*;

import org.junit.Before;
import org.junit.Test;

import net.sourceforge.jwebunit.util.TestingEngineRegistry;
import org.junit.Assert;


public class JWebUnitTest {
    
    /*
    @Before
    public void prepare() {
        setTestingEngineKey(TestingEngineRegistry.TESTING_ENGINE_HTMLUNIT); 
        //setTestingEngineKey(TestingEngineRegistry.TESTING_ENGINE_WEBDRIVER);
        //setBaseUrl("http://localhost:8081/junitwebapp");
        //setBaseUrl("http://127.0.0.1:41107");
        //String baseURL = "http://127.0.0.1:41107";
    }
    */

    /*
    @Test
    public void homePage_Firefox() throws Exception {
        try (final WebClient webClient = new WebClient(BrowserVersion.FIREFOX_52)) {
            final HtmlPage page = webClient.getPage("http://htmlunit.sourceforge.net");
            Assert.assertEquals("HtmlUnit - Welcome to HtmlUnit", page.getTitleText());
        }
    }
    */
    public HtmlPage page;
    public WebClient webClient;
    
    @Before
    public void prepare() throws Exception {
        //try (final WebClient webClient = new WebClient(BrowserVersion.FIREFOX_52)) {
        webClient = new WebClient(BrowserVersion.FIREFOX_52);
        setTestingEngineKey(TestingEngineRegistry.TESTING_ENGINE_HTMLUNIT); 
        page = webClient.getPage("http://127.0.0.1:41107");
            //}
    }
    
    @Test
    public void Autenticar() throws Exception {
     
            Assert.assertEquals("Página inicial", page.getTitleText());
            final HtmlAnchor anchor = (HtmlAnchor) page.getElementById("autenticar");
            anchor.click();
            page = (HtmlPage) webClient.getCurrentWindow().getEnclosedPage();
            Assert.assertEquals("Autenticar", page.getTitleText());
            final HtmlForm form = (HtmlForm) page.getElementById("autenticar");
            final HtmlTextInput chaveField = (HtmlTextInput) page.getElementById("chave");
            chaveField.setValueAttribute("teste");
            final HtmlTextInput senhaField = (HtmlTextInput) page.getElementById("senha");
            senhaField.setValueAttribute("teste");
            final HtmlSubmitInput logarButton = (HtmlSubmitInput) page.getElementById("senha");
            logarButton.click();
            
            
            
    }
    
    /*
    @Deprecated
    @Test
    public void testLoginPage() {
        beginAt("index.html"); 
        //assertTitleEquals("Página inicial");
        //assertLinkPresent("home");
        //clickLink("home");
        //assertTitleEquals("Home");
    }
    */
    
    
    /*
    @Deprecated
    @Test
    public void testHomePage() {
        beginAt("home.jsp"); 
        assertTitleEquals("Home");
        assertLinkPresent("login");
        clickLink("login");
        assertTitleEquals("Login");
    }
    */
    
    
    /*
    @Test
    public void testLoginPage() {
        beginAt("index.jsp"); 
        //assertTitleEquals("Login");
        //assertLinkPresent("home");
        clickLink("home");
        assertTitleEquals("Home");
    }
    */
    private static final Logger LOG = Logger.getLogger(JWebUnitTest.class.getName());
    
}
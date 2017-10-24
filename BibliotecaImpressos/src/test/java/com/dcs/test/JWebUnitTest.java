package com.dcs.test;
/*
import static net.sourceforge.jwebunit.junit.JWebUnit.assertLinkPresent;
import static net.sourceforge.jwebunit.junit.JWebUnit.assertTitleEquals;
import static net.sourceforge.jwebunit.junit.JWebUnit.beginAt;
import static net.sourceforge.jwebunit.junit.JWebUnit.clickLink;
import static net.sourceforge.jwebunit.junit.JWebUnit.setBaseUrl;
import static net.sourceforge.jwebunit.junit.JWebUnit.setTestingEngineKey;
*/
import static net.sourceforge.jwebunit.junit.JWebUnit.*;

import org.junit.Before;
import org.junit.Test;

import net.sourceforge.jwebunit.util.TestingEngineRegistry;


public class JWebUnitTest {
    @Before
    public void prepare() {
        setTestingEngineKey(TestingEngineRegistry.TESTING_ENGINE_HTMLUNIT); 
        //setTestingEngineKey(TestingEngineRegistry.TESTING_ENGINE_WEBDRIVER);
        //setBaseUrl("http://localhost:8081/junitwebapp");
        setBaseUrl("http://localhost:8080/BibliotecaImpressos");
    }

    
    //@Deprecated
    @Test
    public void testLoginPage() {
        beginAt("index.jsp"); 
        //assertTitleEquals("Página inicial");
        //assertLinkPresent("home");
        //clickLink("home");
        //assertTitleEquals("Home");
    }
    
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
}
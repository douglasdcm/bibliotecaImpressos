/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dcs.htmlunit;

import java.util.concurrent.TimeUnit;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 *
 * @author Douglas
 */
public class CreateAcount {
    
    public CreateAcount() {
    }
    
   private WebDriver driver;
   private String baseUrl;
    
    @Before
    public void setUpClass() throws Exception {
       //System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
       //System.setProperty("webdriver.ie.driver","C:\\Selenium\\IEDriverServer.exe");
       //driver = new ChromeDriver();
       driver = new FirefoxDriver();
       //driver = new InternetExplorerDriver();
       baseUrl = "http://automationpractice.com/index.php?controller=authentication&back=my-account";
       driver.manage().window().maximize();
       driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }
    
    @After
    public void tearDownClass() throws Exception {
        //driver.close();
    }
    
    

}

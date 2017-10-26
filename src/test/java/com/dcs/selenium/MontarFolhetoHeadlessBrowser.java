/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dcs.selenium;

import java.util.concurrent.TimeUnit;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 *
 * @author douglas
 */
public class MontarFolhetoHeadlessBrowser {
    
   private WebDriver driver;
   private String baseUrl;
    
    @Before
    public void setUpClass() throws Exception {
       //System.setProperty("webdriver.gecko.driver", "/home/douglas/dcs/gcs/geckodriver");
       //driver = new FirefoxDriver();
       driver = new HtmlUnitDriver();
       //baseUrl = "http://127.0.0.1:8080";
       baseUrl = "http://bibliotecaimpressos.surge.sh";
       //driver.manage().window().maximize();
       driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }
    
    @After
    public void tearDownClass() throws Exception {
        driver.close();
    }
    
    @Test
    public void tearMainClass() throws Exception {
        driver.get(baseUrl);
        driver.findElement(By.linkText("Montar folheto")).click();
        String url = driver.getCurrentUrl().replace("%5C", "/");
        driver.get(url);
        Assert.assertEquals("Montar folheto", driver.getTitle());
        
        driver.findElement(By.id("nome")).sendKeys("testSelenium");
        driver.findElement(By.id("descricao")).sendKeys("testSelenium desc");        
        driver.findElement(By.id("criar_folhetos")).click();
        url = driver.getCurrentUrl().replace("%5C", "/");
        driver.get(url);
        /*
        try{
                //Wait 10 seconds till alert is present
                WebDriverWait wait = new WebDriverWait(driver, 10);
                Alert alert = wait.until(ExpectedConditions.alertIsPresent());

                //Accepting alert.
                alert.accept();
                //((JavascriptExecutor) driver).executeScript(""
                //        + "setTimeout(myFunction(){location.reload();}, 5000);");
                String mensagem = driver.findElement(By.id("mensagem")).getText();
                Assert.assertEquals("Novo rascunho criado.", mensagem);
                //System.out.println("Accepted the alert successfully.");
             }catch(Throwable e){
                System.err.println("Error came while waiting for the alert popup. "+e.getMessage());
             }*/
        
        String mensagem = driver.findElement(By.id("mensagem")).getText();
                Assert.assertEquals("Novo rascunho criado.", mensagem);
        
    }
    
}

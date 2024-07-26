const{webkit,firefox,chromium}=require('playwright');
import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import { Console } from 'console';

test ('Login Test',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});

    const firstContext:BrowserContext=await browser.newContext();

    //Browser Context 1
    const page1:Page =await firstContext.newPage();
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailid1: Locator=await page1.locator('#input-email');//CSS Selector
    const password1=await page1.locator('[name="password"]');//CSS Selector
    const loginButton1=await page1.locator('input[value="Login"]');//CSS Selector
    await emailid1.fill("automationtesting@gmail.com");
    await password1.fill("Playwright@123");
    await loginButton1.click();

    const title1=await page1.title();
    console.log("Home Page Title: "+title1);

     //Browser Context 2
    const secondContext:BrowserContext=await browser.newContext();

    const page2:Page =await secondContext.newPage();
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailid2: Locator=await page2.locator('#input-email');//CSS Selector
    const password2=await page2.locator('[name="password"]');//CSS Selector
    const loginButton2=await page2.locator('input[value="Login"]');//CSS Selector
    await emailid2.fill("automationtesting@gmail.com");
    await password2.fill("Playwright@123");
    await loginButton2.click();

    const title2=await page2.title();
    console.log("Home Page Title: "+title2);


    await browser.close();
});
const{webkit,firefox,chromium}=require('playwright');
import{test, expect, Browser, Page, Locator} from '@playwright/test';
import { Console } from 'console';
import { channel } from 'diagnostics_channel';

test ('Login Test',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailid: Locator=await page.locator('#input-email');//CSS Selector
    const password=await page.locator('[name="password"]');//CSS Selector
    const loginButton=await page.locator('input[value="Login"]');//CSS Selector
    await emailid.fill("automationtesting@gmail.com");
    await password.fill("Playwright@123");
    await loginButton.click();

    const title=await page.title();
    console.log("Home Page Title: "+title);
    await page.screenshot({path:'example.png'});
    expect(title).toEqual('My Account')
    await browser.close();
});
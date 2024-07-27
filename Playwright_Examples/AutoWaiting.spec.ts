const{webkit,firefox,chromium}=require('playwright');
import{test, expect, Browser, Page, Locator} from '@playwright/test';
import { Console } from 'console';
import { channel } from 'diagnostics_channel';


//There are 3 
//1- Default timeout-- which is 30 sec by default
//2- setDefaultTimeout -- here you can change the default time out for specific test
//3- Specific element timeout- only timeout applicable for given action.. page.getByText('OK').first().click({timeout:50_00});

test.use({
    actionTimeout:50_000//1- Globle timeout
})

//This document explained about the playwright Actionablity ..
//https://playwright.dev/docs/actionability
//It auto-waits for all the relevant checks to pass and only then performs the requested action. 
//If the required checks do not pass within the given timeout, action fails with the TimeoutError.
test ('2- Default timeout is 30 sec, Increase to 50 Sec',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://www.spicejet.com/');

    page.setDefaultTimeout(50_000);// It will override the default timeout from 30 sec to 50 sec.

    await page.getByText('Add-ons').first().hover();
    await new Promise(()=>{});//Preventing the script to exiting
    await browser.close();
});

test ('3-Check the wait for Specific Elements',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://www.spicejet.com/');

  
    await page.getByText('Add-ons').first().hover({timeout:50_00});// it will wait for 50  sec for this element only
    await new Promise(()=>{});//Preventing the script to exiting
    await browser.close();
});


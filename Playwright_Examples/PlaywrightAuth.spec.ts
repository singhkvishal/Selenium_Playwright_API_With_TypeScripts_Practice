const{webkit,firefox,chromium}=require('playwright');
import{test, expect, Browser, Page, Locator} from '@playwright/test';
import { Console } from 'console';
import { channel } from 'diagnostics_channel';

test ('Basic Auth with HTTP Header',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    const username ='admin';
    const password ="admin";

    //const authHeader='Basic '+ btoa(username + ':' + password);
    await page.setExtraHTTPHeaders({Authorization : CreateAuthHeader(username,password)});

    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    const title=await page.title();
    console.log("Home Page Title: "+title);
    expect(title).toEqual('The Internet')
    await browser.close();
});

test('Basic Auth with URL',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();

    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

    const title=await page.title();
    console.log("Home Page Title: "+title);
    expect(title).toEqual('The Internet')
    await browser.close();
});

function CreateAuthHeader(username:any,password:any){
      //The btoa() method of the Window interface creates a Base64-encoded ASCII string from a binary string
    return   'Basic '+ btoa(username + ':' + password);
}
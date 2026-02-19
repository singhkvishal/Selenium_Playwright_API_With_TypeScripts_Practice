const{webkit,firefox,chromium}=require('playwright');
import{test, expect, Browser, Page, Locator} from '@playwright/test';
import { Console } from 'console';
import { channel } from 'diagnostics_channel';


test ('Login Test CSS Selector',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://www.spicejet.com/');

    page.getByText('Add-ons').first().hover();
    await new Promise(()=>{});//Preventing the script to exiting
    await browser.close();
});
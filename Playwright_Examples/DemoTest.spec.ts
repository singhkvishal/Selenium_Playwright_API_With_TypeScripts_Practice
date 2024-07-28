const{webkit,firefox,chromium}=require('playwright');
import{test, expect, Browser, Page, Locator} from '@playwright/test';
import { Console } from 'console';
import { channel } from 'diagnostics_channel';

test ('Login Test',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.locator('xpath=//*[@class="G43f7e"]').fill("Playwright");

    const listvalue: Locator= await page.locator('//*[@class="G43f7e"][@role="listbox"]');

 
        let values=    listvalue.allTextContents();
        for(let j=0;j<30;j++){
            for (let i = 0; i < (await values).length; i++) {

                if( values[i]=="Playwright"){
             console.log ("Block statement execution no." + i);
             }

            }
            
    }
   
    await browser.close();
});
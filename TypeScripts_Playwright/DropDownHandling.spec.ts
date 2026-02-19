const{webkit,firefox,chromium}=require('playwright');
import{test, expect, Browser, Page, Locator} from '@playwright/test';
import { Console } from 'console';
import { channel } from 'diagnostics_channel';

test ('Login Test',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

    await page.selectOption("//*[@id='post-2646']//select" , {label:'India'});

    await page.selectOption("//*[@id='post-2646']//select" , {value:'DZA'});
    await browser.close();
});

test ('Login Test CSS Selector',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

    const allOptions = await page.$$('select > option');
    console.log(allOptions.length);

    for(const e of allOptions){
        const text=await e.textContent();
        console.log(text);
    }
    await browser.close();
});
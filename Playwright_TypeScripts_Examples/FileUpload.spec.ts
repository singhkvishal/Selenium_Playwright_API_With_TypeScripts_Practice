const{webkit,firefox,chromium}=require('playwright');
import{test, expect, Browser, Page, Locator} from '@playwright/test';
import { Console } from 'console';
import { channel } from 'diagnostics_channel';
import path from 'path';

test ('Upload Single File',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://demo.automationtesting.in/FileUpload.html');

    await page.locator("//input[@id='input-4']").setInputFiles("./example.png")
    //Single File Upload
    await new Promise(()=>{});//Preventing the script to exiting

    await browser.close();
});

test ('Upload Multiple Files',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://demo.automationtesting.in/FileUpload.html');

    await page.locator("//input[@id='input-4']").setInputFiles([path.join("./example.png"), path.join("./programmer.gif")]);
    await new Promise(()=>{});//Preventing the script to exiting

    await browser.close();
});

test ('Remove the Files',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://demo.automationtesting.in/FileUpload.html');

    await page.locator("//input[@id='input-4']").setInputFiles([]);
    await new Promise(()=>{});//Preventing the script to exiting

    await browser.close();
});


test ('Buffer Memory File',async() =>{
    const browser: Browser=await chromium.launch({healess:false,channel:'chrome'});
    const page:Page =await browser.newPage();
    await page.goto('https://demo.automationtesting.in/FileUpload.html');

    await page.locator("//input[@id='input-4']").setInputFiles({
        name:'vishal.txt',
        mimeType:'text/plain',
        buffer:Buffer.from('This is Vishal test file')
    });
    await new Promise(()=>{});//Preventing the script to exiting

    await browser.close();
});
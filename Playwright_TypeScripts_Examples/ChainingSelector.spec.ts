import { channel } from "diagnostics_channel";
import test, { Browser, chromium, expect, Locator, Page } from "playwright/test";
test ('Playwright Chaining Loctors',async() =>{
    const browser : Browser =await chromium.launch({headless:false,channel:"chrome"});
    const page : Page = await(await browser.newContext()).newPage();
    await page.goto('https://www.orangehrm.com/en/book-a-free-demo/');

    //1- using Chaining Locators
    const fullname:Locator=page.locator('form#Form_getForm >> #Form_getForm_Name');
    await fullname.fill("Vishal SIngh");

    await page.locator('form#Form_getForm >> text=Get Your Free Trail').click();

    await new Promise(()=>{});//Preventing the script to exiting
})

test ('Playwright Chaining the Locators',async() =>{
    const browser : Browser =await chromium.launch({headless:false,channel:"chrome"});
    const page : Page = await(await browser.newContext()).newPage();
    await page.goto('https://www.orangehrm.com/en/book-a-free-demo/');

    //1- using Chaining Locators
    const formLocator:Locator=page.locator('form#Form_getForm');
    const getFreeTrail=page.getByRole('button',{name:"Get your Free Trial"});

    await formLocator.locator(getFreeTrail).click();

    await new Promise(()=>{});//Preventing the script to exiting
})


test ('Playwright Chaining the Locators in Single Line',async() =>{
    const browser : Browser =await chromium.launch({headless:false,channel:"chrome"});
    const page : Page = await(await browser.newContext()).newPage();
    await page.goto('https://www.orangehrm.com/en/book-a-free-demo/');

    //1- using Chaining Locators
    page.locator('form#Form_getForm').getByRole('button',{name:"Get your Free Trial"}).click();

    await new Promise(()=>{});//Preventing the script to exiting
})
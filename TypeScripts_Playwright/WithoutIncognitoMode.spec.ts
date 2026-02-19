import { chromium,Page,Browser,test, BrowserContext } from "playwright/test";

test('Launch Browser without Incognitomode',async() => {
    
    const Browser: BrowserContext=await chromium.launchPersistentContext('', {headless:false,channel:'chrome'});

    const page : Page =await Browser.newPage();

    await page.goto('https://playwright.dev/');// Playwright will open two pages
    await new Promise(()=>{});//Preventing the script to exiting 
})

test('Launch Browser without Incognitomode in Single Page',async() => {
    
    const Browser: BrowserContext=await chromium.launchPersistentContext('', {headless:false,channel:'chrome'});
    const pages= Browser.pages();
    const page:Page= pages[0]

    await page.goto('https://playwright.dev/');
    await new Promise(()=>{});//Preventing the script to exiting 
})
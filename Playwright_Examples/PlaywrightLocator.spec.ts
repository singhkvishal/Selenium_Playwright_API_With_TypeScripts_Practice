import { channel } from "diagnostics_channel";
import test, { Browser, chromium, expect, Locator, Page } from "playwright/test";
test ('Playwright Locators',async() =>{
    const browser : Browser =await chromium.launch({headless:false,channel:"chrome"});
    const page : Page = await(await browser.newContext()).newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //1- using getByLabel
    const firstname:Locator=page.getByLabel('First Name');
    //2- using getByText
    const lastname:Locator=page.getByText('Last Name');
    await firstname.fill('Vishal');
    await lastname.fill("Singh");

    //Playwright supports shorthand for selecting elements using certain attributes. Currently, only the following attributes are supported:
    //id, data-testid, data-test-id, data-test selectors
    // attribute is defined in 'playwright.config.ts' at line no 32. here you can define your own type
    const telephonenumber:Locator =page.getByTestId('tel');
    telephonenumber.fill("90281432")   

    await new Promise(()=>{});//Preventing the script to exiting
})

test('Select by Area Role',async()=>{
    const browser : Browser =await chromium.launch({headless:false,channel:"chrome"});
    const page : Page = await(await browser.newContext()).newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //1- using getByRole
    const Header:Locator=page.getByRole('heading',{name:'Register Account'});
    await expect(Header).toBeVisible();

    await page.getByRole('checkbox').click();//By default it will click on first checkbox
    await expect(page.getByRole("link",{name:'My Account'})).toBeVisible();

    await page.getByRole('button',{name:'Continue'}).click();
    await new Promise(()=>{});//Preventing the script to exiting 
    await page.waitForTimeout(3000);
})


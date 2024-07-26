import { channel } from "diagnostics_channel";
import test, { Browser, chromium, expect, Locator, Page } from "playwright/test";

test('First Loactor Test',async() =>{
    const browser : Browser =await chromium.launch({headless:false,channel:"chrome"});
    const page : Page = await(await browser.newContext()).newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //1- using ID
    const firstname:Locator=page.locator('id=input-firstname');
    const lastname:Locator=page.locator('id=input-lastname');
    await firstname.fill('Vishal');
    await lastname.fill("Singh");

    //2- Using the class name
    const logo:Locator =page.locator(".img-responsive");
    console.log("Log Exist"+ logo.isDisabled);

    //3- Using text
    const regAcount:Locator =page.locator("text=Register Account");
    console.log(regAcount.isEnabled);

    //4- CSS locator
    const emailid:Locator= page.locator('css=input#input-email');
    await emailid.fill("testemailid@gmail.com");

    const privicyCheckBox : Locator = page.locator('css=input[type="checkbox"]');
    await privicyCheckBox.check();

     //5- xpath
    const telphone:Locator =page.locator("xpath=//input[@name='telephone']")
    telphone.fill("2234342374");
   
    //

    await new Promise(()=>{});//Preventing the script to exiting
})
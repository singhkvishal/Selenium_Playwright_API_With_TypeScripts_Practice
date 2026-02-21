import { chromium, Page } from "playwright";
import { ChatOpenAI } from "@langchain/openai";
import { traceable } from "langsmith/traceable";
import { wrapOpenAI } from "langsmith/wrappers";

// 1. Wrap the OpenAI client to automatically trace all LLM calls
const model = new ChatOpenAI({ 
  modelName: "gpt-4o",
  configuration: {
    // This wrapper automatically sends latency/token data to LangSmith
    clientOptions: wrapOpenAI(new ChatOpenAI().client) 
  }
});

// 2. Define a "Traceable" function for a browser action
// This creates a nested "span" in LangSmith
const performSmartAction = traceable(async (page: Page, actionDescription: string) => {
  const model = new ChatOpenAI({ modelName: "gpt-4o-mini" });
  
  // AI decides which selector to use based on the description
  const elements = await page.evaluate(() => 
    Array.from(document.querySelectorAll("button, a")).map(el => el.innerText)
  );

  const res = await model.invoke(`Which of these button texts matches the intent: "${actionDescription}"? \nOptions: ${elements.join(", ")}`);
  const targetText = res.content.toString();

  await page.click(`text="${targetText}"`);
  return `Clicked button with text: ${targetText}`;
}, { name: "Playwright-AI-Action" });

// 3. Main Test Execution
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://example.com/login");

  // This whole flow will appear as one parent trace with nested steps
  await traceable(async () => {
    await performSmartAction(page, "The primary login submission button");
  }, { name: "End-to-End Login Test" })();

  await browser.close();
})();
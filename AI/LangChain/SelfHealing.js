import { chromium } from 'playwright';
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

async function smartClick(page, selector, description) {
    try {
        // 1. Attempt standard Playwright click
        await page.click(selector, { timeout: 3000 });
        console.log(`✅ Successfully clicked ${description} using selector: ${selector}`);
    } catch (error) {
        console.warn(`⚠️ Selector ${selector} failed. Triggering LangChain healing...`);

        // 2. Get the page's HTML structure (simplified for the LLM)
        const domSnapshot = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('button, a, input[type="button"]'))
                .map(el => ({
                    text: el.innerText || el.value,
                    id: el.id,
                    className: el.className,
                    role: el.getAttribute('role')
                }));
        });

        // 3. Use LangChain to find the "new" correct element
        const model = new ChatOpenAI({ modelName: "gpt-4o", temperature: 0 });
        const prompt = PromptTemplate.fromTemplate(`
            The user wants to click on: "{description}".
            The previous selector failed. Here are the interactive elements on the page:
            {dom}
            
            Return ONLY the CSS selector (ID or class) of the element that most likely matches the description.
        `);

        const chain = prompt.pipe(model);
        const result = await chain.invoke({
            description: description,
            dom: JSON.stringify(domSnapshot)
        });

        const newSelector = result.content.trim();
        console.log(`💡 AI Suggested New Selector: ${newSelector}`);

        // 4. Retry with the AI-suggested selector
        await page.click(newSelector);
        console.log(`🚀 Self-healed: Successfully clicked ${description}!`);
    }
}

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com/login');

    // If the ID was changed from #login-btn to .submit-action, the AI will catch it.
    await smartClick(page, '#old-broken-id', 'The Login Button');

    await browser.close();
})();
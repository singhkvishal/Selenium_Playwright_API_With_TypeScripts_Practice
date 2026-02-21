//npm install langchain @langchain/openai @langchain/community playwright
//npx playwright install
import { ChatOpenAI } from "@langchain/openai";
import { createOpenAIFunctionsAgent, AgentExecutor } from "langchain/agents";
import { PlayWrightBrowserToolkit } from "@langchain/community/agents/toolkits/playwright";
import { chromium } from "playwright";
import { pull } from "langchain/hub";
import { ChatPromptTemplate } from "@langchain/core/prompts";

async function runAIAgent() {
  // 1. Launch a real browser
  const browser = await chromium.launch({ headless: false });
  
  // 2. Initialize the Playwright Toolkit
  // This gives the AI tools like 'navigate', 'click', 'type', and 'extract_text'
  const toolkit = await PlayWrightBrowserToolkit.fromBrowser(browser);
  const tools = toolkit.getTools();

  // 3. Setup the AI "Brain" (GPT-4o or GPT-5)
  const model = new ChatOpenAI({ 
    modelName: "gpt-4o", 
    temperature: 0 
  });

  // 4. Define the Agent's behavior using a system prompt
  const prompt = await pull<ChatPromptTemplate>("hwchase17/openai-functions-agent");

  const agent = await createOpenAIFunctionsAgent({
    llm: model,
    tools,
    prompt,
  });

  const executor = new AgentExecutor({
    agent,
    tools,
    verbose: true, // This allows you to see the AI's "thought process" in the console
  });

  console.log("🤖 Agent is starting the task...");

  // 5. Execute a complex instruction
  const result = await executor.invoke({
    input: "Go to the Playwright.dev website, find the 'Docs' link, click it, and tell me what the 'Introduction' page says about 'Cross-browser' support.",
  });

  console.log("🎯 Result:", result.output);

  await browser.close();
}

runAIAgent().catch(console.error);
import { chromium, Page } from "playwright";
import { ChatOpenAI } from "@langchain/openai";
import { StateGraph, START, END } from "@langchain/langgraph";
import { Annotation } from "@langchain/langgraph";

// 1. Define the State: What the graph remembers
const AgentState = Annotation.Root({
  page: Annotation<Page>(),
  targetIntent: Annotation<string>(), // e.g., "Click the Login Button"
  lastSelector: Annotation<string>(),
  error: Annotation<string | null>(),
  success: Annotation<boolean>(),
});

// 2. The Execution Node
const runAction = async (state: typeof AgentState.State) => {
  try {
    await state.page.click(state.lastSelector, { timeout: 2000 });
    return { success: true, error: null };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
};

// 3. The Analyzer Node (The "Brain")
const analyzeAndHeal = async (state: typeof AgentState.State) => {
  const model = new ChatOpenAI({ modelName: "gpt-4o", temperature: 0 });
  
  // Get a snapshot of interactive elements
  const elements = await state.page.evaluate(() => 
    Array.from(document.querySelectorAll("button, a")).map(el => el.outerHTML)
  );

  const response = await model.invoke(
    `The selector "${state.lastSelector}" failed. The user wants to: "${state.targetIntent}". 
     Based on these elements, provide the NEW CSS selector: ${elements.join("\n")}`
  );

  return { lastSelector: response.content.toString(), error: null };
};

// 4. Construct the Graph
const workflow = new StateGraph(AgentState)
  .addNode("execute", runAction)
  .addNode("analyze", analyzeAndHeal)
  .addEdge(START, "execute")
  // Conditional Edge: If failed, go to analyze. If success, END.
  .addConditionalEdges("execute", (state) => (state.success ? END : "analyze"))
  .addEdge("analyze", "execute"); // Loop back to retry

const app = workflow.compile();

// 5. Run the Test
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://example.com/login");

  const finalState = await app.invoke({
    page: page,
    targetIntent: "Click the Login Button",
    lastSelector: "#wrong-id-that-will-fail",
    success: false,
  });

  console.log(finalState.success ? "🎉 Test Passed via Self-Healing!" : "❌ Failed");
  await browser.close();
})();
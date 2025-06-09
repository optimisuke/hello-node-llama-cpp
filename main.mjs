import { fileURLToPath } from "url";
import path from "path";
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
  modelPath: path.join(
    __dirname,
    "models",
    "ELYZA-japanese-Llama-2-7b-fast-instruct-q4_K_M.gguf"
  ),
});
const context = new LlamaContext({ model });
const session = new LlamaChatSession({ context });

const q1 = "富士山の高さは？";
console.log("User: " + q1);
const a1 = await session.prompt(q1);
console.log("AI: " + a1);

const q2 = "エベレストは？";
console.log("User: " + q2);

const a2 = await session.prompt(q2);
console.log("AI: " + a2);

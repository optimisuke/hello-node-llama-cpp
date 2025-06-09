import { LlamaCpp } from "@langchain/community/llms/llama_cpp";

const llamaPath =
  "/Users/ito/Private/zenn-content/hello-node-llama-cpp/models/ELYZA-japanese-Llama-2-7b-fast-instruct-q4_K_M.gguf";
const question = "ラマって何？";

const model = new LlamaCpp({ modelPath: llamaPath });

console.log(`You: ${question}`);
const response = await model.invoke(question);
console.log(`AI : ${response}`);

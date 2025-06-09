import { ChatLlamaCpp } from "@langchain/community/chat_models/llama_cpp";

const llamaPath =
  "/Users/ito/Private/zenn-content/hello-node-llama-cpp/models/ELYZA-japanese-Llama-2-7b-fast-instruct-q4_K_M.gguf";

const model = new ChatLlamaCpp({ modelPath: llamaPath, temperature: 0.7 });

const stream = await model.stream("ラマって何？");

for await (const chunk of stream) {
  console.log(chunk.content);
}

/*

  Once
   upon
   a
   time
  ,
   in
   a
   green
   and
   sunny
   field
  ...
*/

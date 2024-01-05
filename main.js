// main.js
const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();



// import OpenAI from "openai";

// const openai = new OpenAI();

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// main();


// const { Configuration, OpenAIApi } = require("openai");
// const config = new Configuration({
//     apiKey: "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"
// });

// const openai = new OpenAIApi(config);

// async function start() {
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Write 2 sentences why trees are cool",
//         temperature: 0,
//         max_tokens: 500,
//     });
//     console.log(response.data.choices[0].text)
// };

// start();
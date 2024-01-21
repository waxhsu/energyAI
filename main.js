
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: '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',
})

const openai = new OpenAIApi(config);

const runPrompt = async () => {
    const prompt = "Tell me a joke about a cat eating pizza.";

    const response = await openai.createCompletion({
        model: "gpt-4-1106-preview",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1,
    });

    console.log(response.data)
}

runPrompt();

// import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: "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",
// });

// const chatCompletion = await openai.chat.completions.create({
//     messages: [{ 
//         role: "user", 
//         content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
// });
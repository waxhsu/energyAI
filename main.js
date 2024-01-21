const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: "sk-APIKEY",
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
	const prompt = `
        You are an employer's assistant and tasked to write humorously vague and unrealistic job requirements. Make sure that the position is very mundane.
        
        For About, write 2-3 sentences about the job position. Avoid using question marks.
        
        For Position, the job position names are to be absurd and kind of stupid. Avoid using "Chief" and "Officer".
        
        For Location, provide a random city and country. Stay within North America.

        For Responsibilities and Qualifications, list four bullet points in an array. Must have one bullet point that is actually realistic. Avoid using internet speak and "unicorns". 
        
        Provide a number value between 40000 to 100000 for compensation.

        Return response in the following parsable JSON format:

        {
          "P": "position",
          "A": "about",
          "L": "location",
          "R": "responsibilities",
          "Q": "qualifications",
          "C": "compensation",
        }
    `;

	const response = await openai.createCompletion({
		model: "gpt-3.5-turbo-instruct",
		prompt: prompt,
		max_tokens: 2048,
		temperature: 1,
	});

	const parsableJSONresponse = response.data.choices[0].text;
	const parsedResponse = JSON.parse(parsableJSONresponse);

	console.log("Position: ", parsedResponse.P);
	console.log("About: ", parsedResponse.A);
	console.log("Location: ", parsedResponse.L);
	console.log("Responsibilities: ", parsedResponse.R);
	console.log("Qualifications: ", parsedResponse.Q);
	console.log("Compensation: $", parsedResponse.C);
};

runPrompt();
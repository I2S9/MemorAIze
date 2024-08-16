import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines

1. Create clear and concise questions for the front of flashcard.
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcard focuses on a single concept or piece of information.
4. Use simple language to make the flashcards accessible to a wide range of learners.
5. Include a variety of question types, such as definitions, examples, comparisons, and applications.
6. Avoid overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aids to help reinforce the informations.
8. Tailor the difficulty level of the flashcards to the user's specified preferences.
9. If given a body of text, extract the most important and relevant information for the flashcards.
10. Aim to create a balanced set of flashcards that covers the topic comprehensively.
11. Only generate 10 flashcards.
Remember, the goal is to facilitate effective learning and retention of informations through these flashcards.

Return in the following JSON format
{
    "flashcards":[
        {
        "front": str,
        "back": str
        }
    ]
}
`;

export async function POST(req) {
  try {
    const data = await req.text();

    const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-3.1-8b-instruct:free",
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: data },
      ],
    });

    const content = completion.choices[0].message.content;
    console.log('Response of the API:', content);

    // Use regex to extract JSON part
    const jsonMatch = content.match(/{[\s\S]*}/);
    if (jsonMatch) {
      const jsonString = jsonMatch[0];
      const flashcards = JSON.parse(jsonString);
      return NextResponse.json(flashcards);
    } else {
      throw new Error('Invalid JSON response');
    }
  } catch (error) {
    console.error('Error in generating flashcards:', error);
    return NextResponse.json({ error: 'Error in generating flashcards' }, { status: 500 });
  }
}






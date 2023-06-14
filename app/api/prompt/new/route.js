import Prompt from "@models/Prompt";
import { connectToDB } from "@utils/database";



export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();

    const newPrompt = Prompt({
      creator: userId,
      prompt,
      tag
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 })
  }
}
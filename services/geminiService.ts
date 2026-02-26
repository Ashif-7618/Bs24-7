
import { GoogleGenAI } from "@google/genai";

export async function getChatResponse(messages: { role: string; content: string }[]) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "API Key not configured. Please check environment settings.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-3-flash-preview';
    
    const prompt = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');
    
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: `You are 'BS 24/7 AI', a helpful and professional government document assistant. 
        Your goal is to guide users through government document processes (Passports, ID cards, Certificates, etc.) in India.
        Be concise, accurate, and empathetic. If you don't know a specific state-level rule, suggest visiting the nearest center.`,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to service. Please try again later.";
  }
}

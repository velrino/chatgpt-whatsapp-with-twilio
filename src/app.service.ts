import { Injectable } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';
import axios from 'axios';

@Injectable()
export class AppService {
    model: string = "gpt-3.5-turbo";
    constructor(
        private readonly twilioService: TwilioService
    ) {
        this.model = process.env.CHATGPT_MODEL || "gpt-3.5-turbo";
    }

    async getHello(question: string) {
        return {
            gpt_model: this.model,
            gpt_response: await this.getChatGPTResponse(question || `Who are you ?`)
        };
    }

    async sendMessage(param: any) {
        console.log({ param })
        const chatGPTResponse = await this.getChatGPTResponse(param.Body);

        await this.twilioService.client.messages.create({
            to: `whatsapp:${param.WaId}`,
            from: `${param.To}`,
            body: chatGPTResponse,

        }).then(message => console.log({ message }));
    }

    listen() {
        this.twilioService.client.messages
            .list({
                limit: 20,
                from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
            })
            .then((messages) => {
                messages.forEach((message) => {
                    console.log(message.body);
                });
            });
    }

    public async getChatGPTResponse(content: string): Promise<string> {
        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
        };

        const data = {
            "model": this.model,
            max_tokens: 2048,
            "messages": [{ "role": "user", content }]
        };

        const presentation = "🤖 *Chat GPT* 🤖 \n\n";
        let message = `${presentation} Sorry, I could not process your request.`;

        try {
            const response = await axios.post(apiUrl, data, { headers });
            console.log({ gptResponse: response.data })
            message = `${presentation}${response.data.choices[0].message.content.trim()}`;
        } catch (error) {
            console.log({ error });
            message = `${presentation} Sorry, I could not process your request.`
        } finally {
            return message;
        }
    }
}


# ChatGPT + WhatsApp using Nest.Js

<p align="center">
  <img src="/documentation/video.gif" height="500" style="float: right; margin-left: 20px"/>
</p>


I'm sharing this personal project where I am using it to improve my knowledge with the integration of  ChatGPT inside WhatsApp. 

Feel free to use or contribute! 

😃

## Requirements

Account in [OpenAI ChatGPT](https://chat.openai.com/chat)

Free/trial account in [Twillio](https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn)

[Node.js](https://nodejs.org/) installed for run this project
  
[Ngrok](https://ngrok.com/download) installed for your exposes this project to Internet.

## Installation

```bash
npm install
```

## Before running this project

Save file `.env.example` as `.env`

You can get `TWILIO_WHATSAPP_NUMBER`, `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in [Twilio Console](https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn)

You can get `OPENAI_KEY` in [OpenAI API Keys](https://platform.openai.com/account/api-keys)

## Running Project

Run in your CMD/Terminal
```bash
npm start:dev
```

Open in your browser
```bash
http://localhost:5001/
```

For default **PORT** this project is 5001, but you can setting **PORT** inside `.env`

<p align="center">
  <img src="/documentation/images/running-localhost.png" />
</p>

```bash
ngrok http 5001
```

If your setting another **PORT**, use

```bash
ngrok http YOUR_PORT
```

Now copy URL from line Forwarding

<p align="center">
  <img src="/documentation/images/running-ngrok.png" />
</p>

## Before finish

Paste Ngrok url in input **When a message comes in** with `/send` in final

<p align="center">
  <img src="/documentation/images/settting-twilio-ngrok.png" />
</p>
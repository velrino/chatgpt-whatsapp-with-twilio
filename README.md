
# ChatGPT + WhatsApp Integration using Nest.js

<p align="center">
  <img src="/documentation/video.gif" height="500" style="float: right; margin-left: 20px"/>
</p>

Hi, welcome! 😃

This personal project demonstrates the integration of ChatGPT with WhatsApp using Nest.js.

You can deploy this project directly to Heroku or run it locally using Ngrok to make it accessible over the internet.

Use it to learn, experiment, or contribute to it! 

😃😃😃😃

## Requirements

An [OpenAI ChatGPT](https://chat.openai.com/chat) account

A Free/trial [Twillio](https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn) account

[Node.js](https://nodejs.org/) installed to run this project
  
[Ngrok](https://ngrok.com/download) installed for exposing this local project to the Internet.

**Optional:** An [Heroku](https://www.heroku.com/) account for run this project in Cloud.

## Installation

1.  Clone this repository and navigate to the project directory.

```bash
git clone https://github.com/velrino/chatgpt-whatsapp-with-twilio.git
```

2. For install the required dependencies.
```bash
npm install
```

3.  Rename the `.env.example` file to `.env`.


## Configuration

1. Obtain your `TWILIO_WHATSAPP_NUMBER`, `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` from the [Twilio Console](https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn)

2. Obtain your `OPENAI_KEY` in [OpenAI API Keys](https://platform.openai.com/account/api-keys)

3. Update the `.env` file with the corresponding values.

## Running the Project

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


## Making this local project accessible over the internet
```bash
ngrok http 5001
```

If your setting another **PORT**, use

```bash
ngrok http YOUR_PORT
```

Copy the `Forwarding` URL provided by ngrok.

<p align="center">
  <img src="/documentation/images/running-ngrok.png" />
</p>

Paste Ngrok url in input **When a message comes in** with `/send` in final

<p align="center">
  <img src="/documentation/images/settting-twilio-ngrok.png" />
</p>

Add TWILIO_WHATSAPP_NUMBER in your phone, and send message!

## Deploy to Heroku

You can also deploy this project on Heroku!

You only need:

Create project in Heroku. You can create in your Heroku account or in your terminal
```bash
heroku create -a YOUR_PROJECT_NAME
```

Next step is to define the environments variable

```bash
heroku config:set TWILIO_WHATSAPP_NUMBER=YOUR_VALUE_HERE
```

```bash
heroku config:set TWILIO_ACCOUNT_SID=YOUR_VALUE_HERE
```

```bash
heroku config:set TWILIO_AUTH_TOKEN=YOUR_VALUE_HERE
```
```bash
heroku config:set OPENAI_KEY=YOUR_VALUE_HERE
```

Now deploy to Heroku with:

```bash
git push heroku master
```
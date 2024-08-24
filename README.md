# Second Brain

## Warning: I will flag out when it could be fit for everybody to use with one-click manner. For time being, it's still a toy of IT professionals because it's risky to be used by non-IT people.

## Design
![Alt Text](design/concept.png)

The diagram shows above is an ideal and high level workflow but the key is how to ensure LLM to maximize its capability by using context.

- [version 1](version1) which is a chatbot to consume PDF inspired by [OpenAI](https://blog.gopenai.com/building-a-rag-chatbot-using-langchain-and-streamlit-engage-with-your-pdfs-9163cec219e1).
- [version 2](version2) which is a web UI to put two LLM in and human player to manage two AI chat with each other.
- [version 3](version3) which is the baseline of 2nd brain.

### All designs here is based on version 3. And thanks for [Gemini](https://gemini.google.com/app) as my copilot.
the application structure:
- Activity Capture Module: handles capturing user activity within the browser using browser extension APIs
- Communication Module: Manages communication with the background script, sending activity and receiving responses.
- LLM Module: to provide AI.
- Knowledge Base Module: the core and key place to mix context you're surfing internet with AI's understanding together with your insutrction (protect, support, recommend)

## Features
- watch on me when I'm surfing internet.
- provide reference, recommendation and protection  at the side window along with my browser.
- No online LLM is used and no private data is sent out of my laptop/pc.
- persist my thinking, my preference locally and provide a UI to allow me to adjust it for better help me and protect me.

## Installation
### pre-required:
- Google Chrome (128.0.6613.84 (Official Build) (64-bit))

## How to use
coming soon...
# Custom Chrome Gift Extension  

This project is a **custom Chrome new tab experience** designed as a fun and thoughtful gift.  
It displays images and personalized messages that can be remotely configured through **Firebase**.  

---

## Features
- Replaces the Chrome new tab page with a personalized design  
- Shows custom images, affirmations, fortunes, and more  
- Firebase integration lets you **remotely update the content** without repackaging the extension  
- Great for gifting, you can make it tailored for someone special  

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/CustomChrome.git
cd CustomChrome
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Settings
Create a new file called `config.js` inside the `src/` directory.
Add your configuration there (replace the placeholders with your own values):

```javascript
// src/config.js
export const CONFIG = {
  OPENAI_API_KEY: "your-api-key-here",
  PHONE_NUMBER: "+1234567890",
  FAVORITE_PLACES: {
    "Sample Place": "https://example.com/sample.jpg"
  },
  firebaseConfig: {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
  }
};
```
⚠️ **Do not commit your real keys** to GitHub or share them publicly. Add `config.js` to your `.gitignore` file.

### 4. Load the Extension in Chrome
1. Open Chrome and go to `chrome://extensions/`  
2. Enable **Developer mode** (toggle in the top right)  
3. Click **Load unpacked** and select the project folder  
4. Open a new tab to see your custom page  

---

## Customization
- Add or remove favorite places in `FAVORITE_PLACES` to change the background
- Update Firebase content to change messages and images remotely
- Allow your giftee to send you messages directly to your configured phone number  
- Use ChatGPT integration to automatically generate a **daily fortune** 


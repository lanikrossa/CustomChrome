import { CONFIG } from '../config.js';

export async function displayFortune() {
    
    const today = new Date().toISOString().split('T')[0];
    const cachedFortune = localStorage.getItem("fortune_" + today);
    if (cachedFortune) {
        document.getElementById("google-logo").style.display = "none";
        document.getElementById("display-choice").innerText = cachedFortune;
        return;
    }

    const mykey = CONFIG.OPENAI_API_KEY;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${mykey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a daily fortune teller website that creates very specific, fun, lighthearted fortunes. The fortunes are never longer than 2 sentences." },
                { role: "user", content: "Write a fortune for a man named Ryan who is 25. He lives with his roommates spencer and benji. He is dating Lani and loves her very much. He works in private equity and lives in san francisco. Only use some of this information in the fortune" }
            ],
            max_tokens: 150
        })
    });
    
    const data = await response.json();
    const fortune = data.choices[0].message.content; 
    console.log("Daily fortune:", fortune);
    document.getElementById("google-logo").style.display = "none";
    document.getElementById("display-choice").innerText = fortune;
    // Cache the fortune for today
    localStorage.setItem("fortune_" + today, fortune);
}
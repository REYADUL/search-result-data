import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
    headless:false
});

const page = await browser.newPage();

await page.goto("https://duckduckgo.com/",{
    waitUntil: "networkidle2",
    timeout: 60000,
});
await page.waitForSelector('#searchbox_input');
await page.type('#searchbox_input','abu taher automation');
await page.click('button.searchbox_searchButton__F5Bwq');
await page.waitForSelector('#more-results');

const firstPageResult = await page.evaluate(()=>{
    return[...document.querySelectorAll('a span.EKtkFWMYpwzMKOYr0GYm')].map(e=>e.innerText)
});

firstPageResult.map(result=>(console.log(result)));

await browser.close();
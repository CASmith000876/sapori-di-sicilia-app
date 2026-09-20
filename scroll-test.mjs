import { chromium, devices } from 'playwright';
import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('app');
const srv = http.createServer((req, res) => {
  let p = path.join(root, decodeURIComponent(req.url.split('?')[0])); if (p.endsWith(path.sep)) p = path.join(p, 'index.html');
  fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); res.end(); return; } res.writeHead(200); res.end(d); });
}).listen(8765);
const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ ...devices['Pixel 7'] });
const page = await ctx.newPage();
await page.goto('http://localhost:8765/');
await page.click('[data-go="menu"]'); await page.click('[data-cat="drinks"]');
const r = await page.evaluate(() => { const a = document.getElementById('app'); return { sh: a.scrollHeight, ch: a.clientHeight, docScroll: document.documentElement.scrollHeight }; });
await page.mouse.move(200, 500); await page.mouse.wheel(0, 600);
await page.waitForTimeout(300);
const top = await page.evaluate(() => document.getElementById('app').scrollTop);
await page.touchscreen.tap(200, 400);
console.log(JSON.stringify({ ...r, scrollTopAfterWheel: top }));
await browser.close(); srv.close();

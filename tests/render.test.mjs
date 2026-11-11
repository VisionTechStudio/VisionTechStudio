import { after, afterEach, test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { readFileSync } from 'node:fs';
import { mergeInitialData } from '../src/blog/mergeInitialData.mjs';

// DOM integration tests, not a substitute for visual browser verification.
const dom = new JSDOM('<!doctype html><html><head></head><body><div id="test-root"></div></body></html>', {url:'http://localhost:5173/',pretendToBeVisual:true});
for(const name of ['window','document','navigator','HTMLElement','Element','SVGElement','HTMLImageElement','Node','MutationObserver','DOMParser','CustomEvent','Event','Image','localStorage','sessionStorage','location','AbortController','AbortSignal','FormData'])Object.defineProperty(globalThis,name,{configurable:true,writable:true,value:dom.window[name]});
for(const key of Object.getOwnPropertyNames(window))if(/^(?:HTML|SVG).*Element$/.test(key)||['Document','DocumentFragment','ShadowRoot'].includes(key))Object.defineProperty(globalThis,key,{configurable:true,writable:true,value:window[key]});
globalThis.self=window;globalThis.getComputedStyle=window.getComputedStyle.bind(window);globalThis.requestAnimationFrame=window.requestAnimationFrame.bind(window);globalThis.cancelAnimationFrame=window.cancelAnimationFrame.bind(window);
window.matchMedia=globalThis.matchMedia=query=>({matches:query.includes('min-width')&&!query.includes('max-width'),media:query,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
class Observer{observe(){}unobserve(){}disconnect(){}}
window.ResizeObserver=globalThis.ResizeObserver=Observer;window.IntersectionObserver=globalThis.IntersectionObserver=Observer;
window.scrollTo=()=>{};HTMLElement.prototype.scrollIntoView=function(){};window.CSS=globalThis.CSS={supports:()=>false,escape:value=>value};
const cachedData=document.createElement('script');cachedData.type='framer/handover';cachedData.id='__framer__handoverData';cachedData.textContent=mergeInitialData(readFileSync(new URL('../src/preserved/initial-data.json',import.meta.url),'utf8'),readFileSync(new URL('../src/blog/initial-data.json',import.meta.url),'utf8'));document.body.prepend(cachedData);
const server=await createServer({configFile:false,logLevel:'silent',esbuild:{jsx:'automatic'},optimizeDeps:{noDiscovery:true,include:[]},server:{middlewareMode:true},appType:'custom'});
const React=await import('react');const {createRoot}=await import('react-dom/client');
const {getPageRoot}=await server.ssrLoadModule('/src/preserved/runtime/script_main.CV1Flg4e.mjs');
let root;
async function until(check){const deadline=Date.now()+8000;while(!check()){if(Date.now()>deadline)throw new Error('Original page did not render expected content');await new Promise(resolve=>setTimeout(resolve,20));}}
afterEach(()=>{root?.unmount();root=null;document.getElementById('test-root').replaceChildren();});
after(async()=>{await server.close();dom.window.close();});
test('Approved homepage mounts as a real React tree with its original sections',async()=>{
 const page=await getPageRoot({routeId:'augiA20Il',localeId:'default',shouldResolveInitialRouteContentState:true});assert.ok(React.isValidElement(page));
 const host=document.getElementById('test-root');root=createRoot(host);root.render(page);
 await until(()=>host.textContent.includes('Our Clients')&&host.textContent.includes('Digital Marketing')&&host.textContent.includes('Alongside')&&host.textContent.includes('Hypertech'));
 assert.match(host.textContent,/DEV, DESIGN &/);assert.match(host.textContent,/97%/);assert.match(host.textContent,/IRELAND/);assert.match(host.textContent,/CANADA/);
 assert.ok(host.querySelector('.framer-Qkz13'),'Original service presentation');assert.ok(host.querySelector('.framer-Y6dBr img'),'Original service imagery');assert.ok(host.querySelector('.framer-1n71jbg'),'Original client ticker');
});
test('Approved contact page mounts with its form and updated phone number',async()=>{
 window.history.replaceState(null,'','/contact/');
 const page=await getPageRoot({routeId:'roctcboM5',localeId:'default',shouldResolveInitialRouteContentState:true});
 const host=document.getElementById('test-root');root=createRoot(host);root.render(page);
 await until(()=>host.textContent.includes('First Name')&&host.textContent.includes('+92 322 5396617'));
 assert.ok(host.querySelector('form.framer-7rfox'));assert.ok(host.querySelector('input[type="email"]'));assert.ok(host.querySelector('select'));assert.match(host.textContent,/What services does your agency offer/);
});
test('About page uses the supplied content and review design within the existing site', async()=>{
 window.history.replaceState(null,'','/about/');document.body.classList.add('about-page');
 const {default:AboutPage}=await server.ssrLoadModule('/src/pages/AboutPage.jsx');
 const host=document.getElementById('test-root');root=createRoot(host);root.render(React.createElement(AboutPage));
 await until(()=>host.textContent.includes('Our Impact')&&host.textContent.includes('Good work starts with good partnerships.'));
 assert.ok(host.querySelector('.framer-zXAh7'),'Original About layout');
 assert.equal(host.querySelectorAll('.vts-review-column').length,3);
 assert.match(host.textContent,/FICTIONAL DEMO CONTENT/);
 assert.equal(document.title,'About Us | Vision Tech Studio');
 assert.equal(host.querySelector('iframe'),null);
 const {installNavigation}=await server.ssrLoadModule('/src/preserved/enhancements/navigation.js');
 const {installAboutLinks}=await server.ssrLoadModule('/src/about/navigation.js');
 installNavigation();installAboutLinks();
 assert.equal(host.querySelector('.homepage-section-links a[href="/about/"]')?.textContent,'About');
 assert.ok(host.querySelector('.homepage-section-links a[href="/#services"]'));
 assert.ok(host.querySelector('.homepage-footer-links a[href="/about/"]'));
 document.body.classList.remove('about-page');
});
test('Blog listing mounts the supplied four articles and page navigation', async()=>{
 window.history.replaceState(null,'','/blog/');document.body.classList.add('blog-page');
 const {default:BlogPage}=await server.ssrLoadModule('/src/pages/BlogPage.jsx');
 const host=document.getElementById('test-root');root=createRoot(host);root.render(React.createElement(BlogPage));
 await until(()=>host.textContent.includes('Insights That Drive Growth')&&host.textContent.includes('Media Planning 101: Spend Smarter, Not More'));
 for(const title of ['Why Most Digital Marketing Campaigns Fail','The Psychology Behind High Converting Branding','Design That Sells: The Psychology Behind Branding'])assert.ok(host.textContent.includes(title));
 assert.ok(host.querySelector('.framer-tBXNZ'));
 assert.equal(host.querySelector('iframe'),null);
 await until(()=>document.title==='Blog | Vision Tech Studio');
 const {installAboutLinks}=await server.ssrLoadModule('/src/about/navigation.js');installAboutLinks();
 assert.ok(host.querySelector('.homepage-section-links a[href="/blog/"]'));
 assert.ok(host.querySelector('.homepage-footer-links a[href="/blog/"]'));
 document.body.classList.remove('blog-page');
});
test('Direct blog article loads its content before mounting the original page', async()=>{
 const slug='why-most-digital-marketing-campaigns-fail';window.history.replaceState(null,'','/blog/'+slug);document.body.classList.add('blog-page');
 const {default:BlogArticlePage}=await server.ssrLoadModule('/src/pages/BlogArticlePage.jsx');
 const host=document.getElementById('test-root');root=createRoot(host);root.render(React.createElement(BlogArticlePage,{slug}));
 await until(()=>host.textContent.includes('The Real Problem: No Clear Strategy'));
 assert.ok(host.textContent.includes('Why Most Digital Marketing Campaigns Fail'));
 document.body.classList.remove('blog-page');
});

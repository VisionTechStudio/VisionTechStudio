import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
function files(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(f=>f.isDirectory()?files(join(dir,f.name)):[join(dir,f.name)]);}
test('application has no template runtime or remote media dependencies',()=>{
 assert.equal(existsSync('src/integrations/framer'),false);
 assert.equal(existsSync('src/preserved'),false);
 const active=files('src').filter(p=>/\.(jsx|css|js)$/.test(p));
 for(const p of active){const s=readFileSync(p,'utf8');assert.doesNotMatch(s,/FramerPage|framerusercontent\.com|https:\/\/images\.unsplash\.com/,p);}
});
test('all local image and font references exist',()=>{for(const p of files('src')){if(!/\.(jsx|css|js|json)$/.test(p))continue;for(const m of readFileSync(p,'utf8').matchAll(/\/assets\/[a-zA-Z0-9._-]+/g))assert.ok(existsSync('public'+m[0]),p+': '+m[0]);}});

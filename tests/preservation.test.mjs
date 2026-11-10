import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import React from 'react';
import { normalizeBootstrap } from './bootstrap-normalizer.mjs';
import * as bridge from '../src/preserved/runtime/react.DY1tL0hb.mjs';
const manifest=JSON.parse(readFileSync(new URL('../src/preserved/approved-manifest.json',import.meta.url)));
const digest=value=>createHash('sha256').update(value).digest('hex');
const normalize=value=>value.replace(/^\/\/# sourceMappingURL=.*$/gm,'').trim();
test('Original page, component, animation and motion modules match the approved site',()=>{
 for(const [name,expected] of Object.entries(manifest.modules)){
  const actual=readFileSync(new URL('../src/preserved/runtime/'+name,import.meta.url),'utf8');
  assert.equal(digest(normalize(actual)),expected,name+' was changed from the approved site');
 }
});
test('Approved styles and responsive overrides remain unchanged',()=>{
 for(const [name,expected] of Object.entries(manifest.styles))assert.equal(digest(readFileSync(new URL('../src/preserved/'+name,import.meta.url))),expected,name);
});
test('Navigation and form enhancements retain the exact approved behavior',()=>{
 for(const name of ['navigation','contactForm']){
  const source=readFileSync(new URL('../src/preserved/enhancements/'+name+'.js',import.meta.url),'utf8');
  const body=source.slice(source.indexOf('{')+1,source.lastIndexOf('}')).trim();
  assert.equal(digest(body),manifest[name+'BodyHash'],name);
 }
});
test('Original motion components share the installed React hooks and element types',()=>{
 assert.equal(bridge.C,React);assert.equal(bridge.y,React.useState);assert.equal(bridge.x,React.useEffect);
 assert.equal(bridge.M,React.useContext);assert.equal(bridge.S,React.useRef);
 assert.ok(React.isValidElement(bridge.f('div',null,'same React instance')));
});

test('Approved case-study and blog data are preserved for first render',()=>{assert.equal(digest(readFileSync(new URL('../src/preserved/initial-data.json',import.meta.url))),manifest.initialDataHash);});

test('Original header, footer and layout code remain unchanged apart from app bootstrap integration',()=>{const source=readFileSync(new URL('../src/preserved/runtime/script_main.CV1Flg4e.mjs',import.meta.url),'utf8');assert.equal(digest(normalizeBootstrap(source)),manifest.bootstrapHash);});

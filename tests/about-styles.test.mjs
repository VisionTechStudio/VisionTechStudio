import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import postcss from 'postcss';

test('About stylesheet cannot hide or collapse the document body', () => {
  const css = postcss.parse(readFileSync(new URL('../src/about/about.css', import.meta.url), 'utf8'));
  css.walkRules(rule => {
    if (!rule.selectors.includes('body.about-page')) return;
    rule.walkDecls(declaration => {
      assert.ok(!(['display', 'visibility', 'opacity'].includes(declaration.prop) && ['none', 'hidden', '0'].includes(declaration.value)), `Body must stay visible: ${declaration.toString()}`);
    });
  });
});

 test('Blog stylesheet cannot hide the document body', () => {
  const css = postcss.parse(readFileSync(new URL('../src/blog/blog.css', import.meta.url), 'utf8'));
  css.walkRules(rule => {
    if (!rule.selectors.includes('body.blog-page')) return;
    rule.walkDecls(d => assert.ok(!(['display','visibility','opacity'].includes(d.prop) && ['none','hidden','0'].includes(d.value))));
  });
});

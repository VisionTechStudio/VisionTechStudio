import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveRoute } from '../src/app/routes.mjs';

test('Public page routes accept trailing slashes', () => {
  for (const [path, name] of [['/', 'home'], ['/about', 'about'], ['/blog', 'blog'], ['/contact', 'contact']]) {
    assert.equal(resolveRoute(path).name, name);
    assert.equal(resolveRoute(path + '/').name, name);
  }
});
test('Direct articles resolve their slug and malformed paths show a missing page', () => {
  assert.deepEqual(resolveRoute('/blog/my-article/'), { name: 'article', slug: 'my-article' });
  for (const path of ['/missing', '/blog/nested/article', '/blog/%E0%A4%A']) assert.equal(resolveRoute(path).name, 'notFound');
});

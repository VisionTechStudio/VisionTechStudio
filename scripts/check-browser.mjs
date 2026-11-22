import { chromium } from "playwright";
import { existsSync } from "node:fs";
import assert from "node:assert/strict";
// Measurements from marketinglab.framer.ai at 1440 x 950, with scroll settled.
const expected = [
  [0, [337, 731, 1185, 1638]],
  [300, [337, 430, 884, 1338]],
  [700, [337, 337, 484, 938]],
  [1100, [337, 337, 337, 538]],
  [1500, [138, 138, 138, 138]],
];
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({
  headless: true,
  ...(existsSync(chrome) ? { executablePath: chrome } : {}),
});
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 950 },
  });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(process.env.PREVIEW_URL || "http://127.0.0.1:5174/");
  await page.locator(".process-section").waitFor();
  assert.equal(
    await page.locator(".vts-16gyzkb .animated-button").count(),
    1,
    "Single hero CTA",
  );
  for (const [offset, positions] of expected) {
    await page.locator(".process-section").evaluate(
      (e, offset) =>
        scrollTo({
          top: e.getBoundingClientRect().top + scrollY + offset,
          behavior: "instant",
        }),
      offset,
    );
    await page.waitForTimeout(50);
    const headingState = await page
      .locator(".process-section")
      .evaluate((section) => {
        const heading = section.querySelector(".process-heading");
        const p = heading.querySelector("p").getBoundingClientRect();
        const overlap = [...section.querySelectorAll(".process-card")].some(
          (e) => {
            const r = e.getBoundingClientRect();
            return (
              r.left < p.right &&
              r.right > p.left &&
              r.top < p.bottom &&
              r.bottom > p.top
            );
          },
        );
        return {
          overlap,
          hidden: getComputedStyle(heading).visibility === "hidden",
        };
      });
    assert.ok(
      !headingState.overlap || headingState.hidden,
      "Process heading must not cover card text",
    );
    const actual = await page
      .locator(".process-card")
      .evaluateAll((es) => es.map((e) => e.getBoundingClientRect().top));
    actual.forEach((y, i) =>
      assert.ok(
        Math.abs(y - positions[i]) < 4,
        `Process stage ${offset}, card ${i + 1}: ${y} versus ${positions[i]}`,
      ),
    );
  }
  const cardReferences = [
    [
      ".vts-nt0kpk",
      ".vts-1x6d7w0 > div",
      0,
      [
        [282, 1171],
        [822, 1200],
        [1369, 1200],
        [1916, 1200],
      ],
    ],
    [
      ".vts-nt0kpk",
      ".vts-1x6d7w0 > div",
      1000,
      [
        [326, 964],
        [301, 1075],
        [370, 1192],
        [915, 1200],
      ],
    ],
    [
      ".vts-nt0kpk",
      ".vts-1x6d7w0 > div",
      2000,
      [
        [-32, 960],
        [-32, 960],
        [-59, 1080],
        [-85, 1200],
      ],
    ],
    [
      ".vts-h0gbet",
      ".vts-K4tom",
      0,
      [
        [130, 413],
        [1038, 413],
        [1874, 413],
        [463, 413],
        [1542, 413],
      ],
    ],
    [
      ".vts-h0gbet",
      ".vts-K4tom",
      1000,
      [
        [-870, 413],
        [-22, 413],
        [822, 413],
        [-539, 413],
        [487, 413],
      ],
    ],
  ];
  for (const [section, selector, offset, positions] of cardReferences) {
    await page.locator(section).evaluate(
      (e, offset) =>
        scrollTo({
          top: e.getBoundingClientRect().top + scrollY + offset,
          behavior: "instant",
        }),
      offset,
    );
    await page.waitForTimeout(1000);
    const actual = await page
      .locator(section)
      .locator(selector)
      .evaluateAll((es) =>
        es.map((e) => {
          const r = e.getBoundingClientRect();
          return [r.y, r.width];
        }),
      );
    positions.forEach((position, i) =>
      position.forEach((v, axis) =>
        assert.ok(
          Math.abs(actual[i][axis] - v) < 12,
          `${selector}, scroll ${offset}, card ${i + 1}, axis ${axis}: ${actual[i][axis]} versus ${v}`,
        ),
      ),
    );
  }
  for (const width of [390, 768, 1024, 1440, 1680]) {
    await page.setViewportSize({ width, height: 950 });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Overflow at ${width}px`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.getByRole("button", { name: "Toggle navigation" }).click();
  assert.equal(await page.locator("#mobile-section-menu").isVisible(), true);
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#mobile-section-menu").isVisible(), false);
  await page.locator(".owned-services button").nth(2).click();
  assert.equal(await page.locator("#service-2").isVisible(), true);
  await page.locator(".owned-faq button").nth(3).click();
  assert.equal(await page.locator("#answer-3").isVisible(), true);
  const articleSlugs = [
    "why-most-digital-marketing-campaigns-fail",
    "the-psychology-behind-high-converting-branding",
    "design-that-sells-the-psychology-behind-branding",
    "media-planning-101-spend-smarter-not-more",
  ];
  for (const slug of articleSlugs)
    for (const width of [390, 1024, 1680]) {
      await page.setViewportSize({ width, height: 950 });
      await page.goto(
        new URL(
          "/blog/" + slug,
          process.env.PREVIEW_URL || "http://127.0.0.1:5174/",
        ).href,
      );
      await page.locator(".vts-16brp18 p").first().waitFor();
      const layout = await page.evaluate(() => {
        const body = document.querySelector(".vts-16brp18"),
          r = body.getBoundingClientRect();
        const hero = document
          .querySelector(".vts-dgllcz")
          .getBoundingClientRect();
        return {
          width: r.width,
          x: r.x,
          heroWidth: hero.width,
          heroHeight: hero.height,
          overflow: document.documentElement.scrollWidth > innerWidth,
          paragraphOverflow: [...body.querySelectorAll("p")].some(
            (e) => e.scrollWidth > e.clientWidth + 1,
          ),
        };
      });
      assert.ok(
        layout.width > 200 && layout.width <= 1200,
        `Article reading width: ${slug} at ${width}`,
      );
      assert.ok(layout.x >= 19, `Article gutters: ${slug} at ${width}`);
      assert.ok(
        layout.heroWidth > 300 && layout.heroHeight > 100,
        `Article hero: ${slug} at ${width}`,
      );
      assert.equal(
        layout.overflow,
        false,
        `Article page overflow: ${slug} at ${width}`,
      );
      assert.equal(
        layout.paragraphOverflow,
        false,
        `Article text clipping: ${slug} at ${width}`,
      );
    }
  await page.goto(
    new URL("/contact/", process.env.PREVIEW_URL || "http://127.0.0.1:5174/")
      .href,
  );
  const inquiry = page.locator("form.vts-7rfox");
  await inquiry.locator('input[name="First Name"]').fill("Preview");
  await inquiry.locator('input[name="Last Name"]').fill("Test");
  await inquiry.locator('input[type="email"]').fill("preview@example.com");
  await inquiry.locator("select").selectOption({ index: 1 });
  await inquiry.locator("textarea").fill("Checking the shared submit button.");
  await inquiry.getByRole("button", { name: "Submit", exact: true }).click();
  await inquiry.getByRole("status").waitFor();
  assert.equal(
    await inquiry.locator('input[name="First Name"]').inputValue(),
    "Preview",
  );
  await page.mouse.move(10, 10);
  const cta = page.locator(".owned-cta");
  await cta.evaluate((e) =>
    scrollTo({
      top: e.getBoundingClientRect().top + scrollY - 80,
      behavior: "instant",
    }),
  );
  await page.waitForTimeout(150);
  const ring = cta.locator(".cta-ring");
  const startRotation = await ring.evaluate(
    (e) => getComputedStyle(e).transform,
  );
  await page.waitForTimeout(250);
  assert.notEqual(
    await ring.evaluate((e) => getComputedStyle(e).transform),
    startRotation,
    "CTA ring rotates",
  );
  const ctaButton = cta.getByRole("link", { name: "Contact Us", exact: true });
  await ctaButton.hover();
  await page.waitForTimeout(450);
  assert.equal(
    await ctaButton.evaluate((e) => getComputedStyle(e).backgroundColor),
    "rgb(243, 243, 255)",
  );
  const pausedRotation = await ring.evaluate(
    (e) => getComputedStyle(e).transform,
  );
  await page.waitForTimeout(200);
  assert.equal(
    await ring.evaluate((e) => getComputedStyle(e).transform),
    pausedRotation,
    "CTA hover pauses ring",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await ring.evaluate((e) => getComputedStyle(e).animationName),
    "none",
  );
  assert.deepEqual(errors, []);
  console.log(
    "PASS home motion/navigation, article layouts and CTA hover/rotation/reduced motion",
  );
} finally {
  await browser.close();
}

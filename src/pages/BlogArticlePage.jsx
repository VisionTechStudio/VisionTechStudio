import "../features/blog/styles/article.css";
import Article0 from "./articles/media-planning-101-spend-smarter-not-more";
import Article1 from "./articles/design-that-sells-the-psychology-behind-branding";
import Article2 from "./articles/the-psychology-behind-high-converting-branding";
import Article3 from "./articles/why-most-digital-marketing-campaigns-fail";
const articles = {
  "media-planning-101-spend-smarter-not-more": Article0,
  "design-that-sells-the-psychology-behind-branding": Article1,
  "the-psychology-behind-high-converting-branding": Article2,
  "why-most-digital-marketing-campaigns-fail": Article3,
};
export default function BlogArticlePage({ slug }) {
  const Article = articles[slug];
  return Article ? <Article /> : <p>Article not found.</p>;
}

import { lazy, Suspense, useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BrandFilters from "./components/BrandFilters";
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
function NavigationEffects() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = location.pathname.startsWith("/contact")
      ? "Contact Us | Vision Tech Studio"
      : "Vision Tech Studio | Marketing, Development & Design";
    const timer = setTimeout(() => {
      const element =
        location.hash &&
        document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (element)
        element.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
          block: "start",
        });
      else window.scrollTo(0, 0);
    }, 30);
    return () => clearTimeout(timer);
  }, [location]);
  useEffect(() => {
    const handle = (event) => {
      const a = event.target.closest("a");
      if (
        !a ||
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey ||
        a.target === "_blank"
      )
        return;
      const href = a.getAttribute("href");
      if (!href) return;
      const url = new URL(href, location.origin || window.location.origin);
      if (
        url.hostname === "marketinglab.framer.ai" &&
        url.pathname.startsWith("/contact")
      ) {
        event.preventDefault();
        navigate("/contact/");
      } else if (
        url.origin === window.location.origin &&
        (url.pathname === "/" || url.pathname === "/contact/")
      ) {
        event.preventDefault();
        navigate(url.pathname + url.hash);
      }
    };
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, [navigate]);
  return null;
}
export default function App() {
  return (
    <>
      <BrandFilters />
      <NavigationEffects />
      <Header />
      <Suspense
        fallback={
          <main className="page-loading" role="status">
            Loading…
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <main className="not-found">
                <h1>Page not found</h1>
                <Link to="/">Back to home</Link>
              </main>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

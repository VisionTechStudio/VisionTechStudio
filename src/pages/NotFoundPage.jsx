import AnimatedButton from "../components/ui/AnimatedButton";
export default function NotFoundPage() {
  return (
    <section
      style={{
        padding: "100px 24px",
        textAlign: "center",
        fontFamily: "Urbanist, sans-serif",
      }}
    >
      <h1>Page not found</h1>
      <p>The page you’re looking for isn’t available.</p>
      <AnimatedButton href="/">Return to Home</AnimatedButton>
    </section>
  );
}

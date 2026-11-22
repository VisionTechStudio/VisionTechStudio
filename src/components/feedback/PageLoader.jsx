export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        padding: "32px",
        fontFamily: "Urbanist, sans-serif",
        color: "#737373",
      }}
    >
      Loading…
    </div>
  );
}

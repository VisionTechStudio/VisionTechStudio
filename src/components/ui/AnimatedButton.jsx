/** Shared visual treatment; native anchor/button semantics stay intact. */
export default function AnimatedButton({
  href,
  children,
  className = "",
  as,
  type,
  tone = "blue",
  ...props
}) {
  const Tag = as || (href ? "a" : "button");
  return (
    <Tag
      {...props}
      {...(Tag === "a"
        ? { href }
        : Tag === "button"
          ? { type: type || "button" }
          : {})}
      className={`owned-button animated-button button-tone-${tone} ${className}`}
    >
      {children && (
        <span className="button-label-window">
          <span className="button-label-primary">{children}</span>
          <span className="button-label-next" aria-hidden="true">
            {children}
          </span>
        </span>
      )}
      <span className="button-arrow-window" aria-hidden="true">
        {["primary", "next"].map((state) => (
          <svg
            key={state}
            className={"button-arrow-" + state}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 13 13 3M3 3h10v10"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </span>
    </Tag>
  );
}

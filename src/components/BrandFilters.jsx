export default function BrandFilters() {
  return (
    <>
      <svg
        {...{
          xmlns: "http://www.w3.org/2000/svg",
          width: "0",
          height: "0",
          "aria-hidden": "true",
          style: { position: "absolute", pointerEvents: "none" },
        }}
      >
        <defs>
          <filter
            {...{
              id: "brand-blue-artwork",
              colorInterpolationFilters: "sRGB",
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <feColorMatrix
              {...{
                type: "matrix",
                values:
                  "0 0 1 0 0  0.305882353 0 0.694117647 0 0  0.937254902 0 0.062745098 0 0  0 0 0 1 0",
              }}
            ></feColorMatrix>
          </filter>
          <filter
            {...{
              id: "brand-blue-portrait",
              colorInterpolationFilters: "sRGB",
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <feColorMatrix
              {...{
                in: "SourceGraphic",
                type: "matrix",
                values:
                  "0 0 1 0 0  0.305882353 0 0.694117647 0 0  0.937254902 0 0.062745098 0 0  0 0 0 1 0",
                result: "blue",
              }}
            ></feColorMatrix>
            <feColorMatrix
              {...{
                in: "SourceGraphic",
                type: "matrix",
                values: "0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  5 -5 0 0 -1.1",
                result: "warm-mask",
              }}
            ></feColorMatrix>
            <feComposite
              {...{
                in: "blue",
                in2: "warm-mask",
                operator: "in",
                result: "blue-areas",
              }}
            ></feComposite>
            <feComposite
              {...{
                in: "SourceGraphic",
                in2: "warm-mask",
                operator: "out",
                result: "natural-areas",
              }}
            ></feComposite>
            <feComposite
              {...{
                in: "blue-areas",
                in2: "natural-areas",
                operator: "arithmetic",
                k1: "0",
                k2: "1",
                k3: "1",
                k4: "0",
              }}
            ></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        {...{
          xmlns: "http://www.w3.org/2000/svg",
          width: "0",
          height: "0",
          "aria-hidden": "true",
          style: { position: "absolute", pointerEvents: "none" },
        }}
      >
        <defs>
          <filter
            {...{ id: "values-brand-blue", colorInterpolationFilters: "sRGB" }}
          >
            <feColorMatrix
              {...{
                type: "matrix",
                values:
                  "0 0 0 0 0  0 0 0 0 0.305882353  0 0 0 0 0.937254902  0 0 0 1 0",
              }}
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
    </>
  );
}

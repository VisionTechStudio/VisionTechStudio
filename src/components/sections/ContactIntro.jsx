import AnimatedButton from "../ui/AnimatedButton";
export default function ContactIntro() {
  return (
    <section className={"vts-1p2ywtc"} data-vts-name={"Hero"}>
      <div className={"vts-1mevvd1"} data-vts-name={"Container"} id={"hero"}>
        <div
          className={"vts-1g95b4y"}
          data-vts-name={"Section Content"}
          style={{ opacity: "1", transform: "none", willChange: "transform" }}
        >
          <div
            className={"vts-wsb7nw"}
            data-vts-name={"Contact Us Today"}
            style={{ transform: "none" }}
          >
            <h1
              className={"vts-text vts-styles-preset-1l74ooz"}
              data-styles-preset={"rv3rz0QeY"}
              dir={"auto"}
            >
              {"Contact Us Today"}
            </h1>
          </div>
          <div className={"vts-arc3gp"} data-vts-name={"Text Wrap"}>
            <div
              className={"vts-ncwpj1"}
              data-vts-name={
                "Tell us about your project.  We’re thrilled that you’re here ! Let’s make this as smooth and enjoyable as possible."
              }
              style={{ transform: "none" }}
            >
              <p
                className={"vts-text vts-styles-preset-1fyq4h1"}
                data-styles-preset={"dRxQtN1go"}
                dir={"auto"}
                style={{ "--vts-text-alignment": "right" }}
              >
                {"Tell us about your project."}
              </p>
            </div>
            <div
              className={"vts-fjt8m1"}
              data-vts-name={
                "Tell us about your project.  We’re thrilled that you’re here ! Let’s make this as smooth and enjoyable as possible."
              }
              style={{ transform: "none" }}
            >
              <p
                className={"vts-text vts-styles-preset-1fyq4h1"}
                data-styles-preset={"dRxQtN1go"}
                dir={"auto"}
                style={{ "--vts-text-alignment": "right" }}
              >
                {
                  "We’re thrilled that you’re here ! Let’s make this as smooth and enjoyable as possible."
                }
              </p>
            </div>
          </div>
        </div>
        <div
          className={"vts-j3yjw8"}
          data-vts-name={"Content Wrapper"}
          style={{ opacity: "1", transform: "none", willChange: "transform" }}
        >
          <form className={"vts-7rfox"} id={"project-inquiry"}>
            <div className={"vts-8h6o9n"} data-vts-name={"Input"}>
              <label className={"vts-1rvv8vt"}>
                <div className={"vts-iiclpo"} style={{ transform: "none" }}>
                  <p
                    className={"vts-text vts-styles-preset-9tuo8t"}
                    data-styles-preset={"QE1uW6T_o"}
                    dir={"auto"}
                    style={{
                      "--vts-text-color":
                        "var(--token-9b2e55bb-8a77-4675-a269-e14abd605196, rgb(23, 23, 23))",
                    }}
                  >
                    {"First Name"}
                  </p>
                </div>
                <div
                  className={
                    "vts-form-text-input vts-form-input-wrapper vts-s6w8qz vts-form-text-input-type"
                  }
                >
                  <input
                    type={"text"}
                    required={true}
                    name={"First Name"}
                    placeholder={"Please enter your name"}
                    className={"vts-form-input vts-form-input-empty"}
                    defaultValue={""}
                  />
                </div>
              </label>
              <label className={"vts-14yskiq"}>
                <div className={"vts-1mlg9r9"} style={{ transform: "none" }}>
                  <p
                    className={"vts-text vts-styles-preset-9tuo8t"}
                    data-styles-preset={"QE1uW6T_o"}
                    dir={"auto"}
                    style={{
                      "--vts-text-color":
                        "var(--token-9b2e55bb-8a77-4675-a269-e14abd605196, rgb(23, 23, 23))",
                    }}
                  >
                    {"Last Name"}
                  </p>
                </div>
                <div
                  className={
                    "vts-form-text-input vts-form-input-wrapper vts-1i6u5ht vts-form-text-input-type"
                  }
                >
                  <input
                    type={"text"}
                    required={true}
                    name={"Last Name"}
                    placeholder={"Please enter your last name"}
                    className={"vts-form-input vts-form-input-empty"}
                    defaultValue={""}
                  />
                </div>
              </label>
            </div>
            <label className={"vts-92w8lg"}>
              <div className={"vts-1jww1i8"} style={{ transform: "none" }}>
                <p
                  className={"vts-text vts-styles-preset-9tuo8t"}
                  data-styles-preset={"QE1uW6T_o"}
                  dir={"auto"}
                  style={{
                    "--vts-text-color":
                      "var(--token-9b2e55bb-8a77-4675-a269-e14abd605196, rgb(23, 23, 23))",
                  }}
                >
                  {"Email"}
                </p>
              </div>
              <div
                className={
                  "vts-form-text-input vts-form-input-wrapper vts-tgnfmh"
                }
              >
                <input
                  type={"email"}
                  required={true}
                  name={"Email"}
                  placeholder={"Please enter your email"}
                  className={"vts-form-input vts-form-input-empty"}
                  defaultValue={""}
                />
              </div>
            </label>
            <label className={"vts-1kx78y8"}>
              <div className={"vts-r69hf5"} style={{ transform: "none" }}>
                <p
                  className={"vts-text vts-styles-preset-9tuo8t"}
                  data-styles-preset={"QE1uW6T_o"}
                  dir={"auto"}
                  style={{
                    "--vts-text-color":
                      "var(--token-9b2e55bb-8a77-4675-a269-e14abd605196, rgb(23, 23, 23))",
                  }}
                >
                  {"Select Service"}
                </p>
              </div>
              <div
                className={
                  "vts-form-input-wrapper vts-form-select-wrapper vts-1qgpfuq"
                }
              >
                <select
                  name={"Service"}
                  required={true}
                  className={"vts-form-input"}
                >
                  <option value={""} disabled={true}>
                    {"Select Service…"}
                  </option>
                  <option value={"Digital Marketing"}>
                    {"Digital Marketing"}
                  </option>
                  <option value={"Brand & Visual Identity"}>
                    {"Brand & Visual Identity"}
                  </option>
                  <option value={"Brand Strategy"}>{"Brand Strategy"}</option>
                  <option value={"Web Development"}>{"Web Development"}</option>
                </select>
              </div>
            </label>
            <label className={"vts-60i7gw"}>
              <div className={"vts-1l7snh0"} style={{ transform: "none" }}>
                <p
                  className={"vts-text vts-styles-preset-9tuo8t"}
                  data-styles-preset={"QE1uW6T_o"}
                  dir={"auto"}
                  style={{
                    "--vts-text-color":
                      "var(--token-9b2e55bb-8a77-4675-a269-e14abd605196, rgb(23, 23, 23))",
                  }}
                >
                  {"Message"}
                </p>
              </div>
              <div
                className={
                  "vts-form-text-input vts-form-input-wrapper vts-16ft57c vts-form-textarea-input-type"
                }
              >
                <textarea
                  name={"Message"}
                  placeholder={"Type here..."}
                  className={"vts-form-input"}
                ></textarea>
              </div>
            </label>
            <div className={"vts-jcb7cb-container"}>
              <AnimatedButton type={"submit"} className="button-full-width">
                {"Submit"}
              </AnimatedButton>
            </div>
            <input
              type={"text"}
              name={"website"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"company"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"message"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"subject"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"title"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"description"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"feedback"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"notes"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"details"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"remarks"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
            <input
              type={"text"}
              name={"comments"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              defaultValue={""}
              style={{ position: "absolute", transform: "scale(0)" }}
            />
          </form>
          <div className={"vts-ylyozz"} data-vts-name={"Image Wrap"}>
            <div className={"vts-1l3w4b9"} data-vts-name={"Image"}>
              <div
                style={{
                  position: "absolute",
                  borderTopLeftRadius: "inherit",
                  borderTopRightRadius: "inherit",
                  borderBottomRightRadius: "inherit",
                  borderBottomLeftRadius: "inherit",
                  cornerTopLeftShape: "inherit",
                  cornerTopRightShape: "inherit",
                  cornerBottomRightShape: "inherit",
                  cornerBottomLeftShape: "inherit",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                }}
              >
                <img
                  decoding={"auto"}
                  width={"1122"}
                  height={"1402"}
                  src={"/assets/owned-172de95f0017ad57.png"}
                  alt={""}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit",
                    borderBottomRightRadius: "inherit",
                    borderBottomLeftRadius: "inherit",
                    cornerTopLeftShape: "inherit",
                    cornerTopRightShape: "inherit",
                    cornerBottomRightShape: "inherit",
                    cornerBottomLeftShape: "inherit",
                    objectPosition: "center center",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

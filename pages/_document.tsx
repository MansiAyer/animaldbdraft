import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-bg-dark text-center m-3">
        <Main />

        <footer>
          <div className="d-flex justify-content-center">
            <div className="border-top border-light mt-3 mb-0">
              <p>
                Built&nbsp;and&nbsp;Maintained by 
                <code>
                  <a
                    className="text-reset text-decoration-none"
                    href="https://in.linkedin.com/in/manoj-kumar-ayer-025653"
                    target="_blank"
                  >
                    {" "}
                  Solulogy
                  </a>
                </code>
              </p>
            </div>
          </div>
        </footer>

        <NextScript />
      </body>
    </Html>
  );
}

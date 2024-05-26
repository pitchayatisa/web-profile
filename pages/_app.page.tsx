import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import appWithI18n from "next-translate/appWithI18n";
import { ThemeProvider } from "next-themes";
import i18nConfig from "../i18n";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Component {...pageProps} />{" "}
    </ThemeProvider>
  );
}

export default appWithI18n(App, {
  ...i18nConfig,
  skipInitialProps: true,
});

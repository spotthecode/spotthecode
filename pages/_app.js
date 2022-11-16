import NavigationBar from "../components/NavigationBar.js"
import Footer from "../components/Footer.js"
import "../styles/globals.css";
import "../styles/Home-page.css";
import "../styles/Nav-style.css";
import "../styles/Practices.css";

// NOTE: Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of stylesheets, and to avoid conflicts, Please move
// all first-party global CSS imports to pages/_app.js. Or convert the import to Component-Level CSS (CSS Modules).

function MyApp({ Component, pageProps }) {
  return (
    <>
       <NavigationBar/>
      <Component {...pageProps} />
        <Footer/>
    </>
  );
}

export default MyApp;

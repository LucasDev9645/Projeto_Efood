import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import { GlobalCss } from "./styles/styles";

const App = () => {
  return (
    <>
      <GlobalCss />
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;

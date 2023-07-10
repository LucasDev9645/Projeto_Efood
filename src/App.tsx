import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";

import { GlobalCss } from "./styles/styles";

const App = () => {
  return (
    <>
      <GlobalCss />
      <Header />
      <Profile />
      <Footer />
    </>
  );
};

export default App;

import Banner from "./components/Banner";
import Header from "./components/Header";

import { GlobalCss } from "./styles/styles";

const App = () => {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
    </>
  );
};

export default App;

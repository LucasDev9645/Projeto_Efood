import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile";

import { GlobalCss } from "./styles/styles";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import ApplicationRoutes from "./routes";
import Footer from "./components/Footer";

import { GlobalCss } from "./styles/styles";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <ApplicationRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

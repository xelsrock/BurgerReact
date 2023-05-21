import { Provider } from "react-redux";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { store } from "./store/index.js";
import { ModalDelivery } from "./components/ModalDelivery/ModalDelivery.jsx";

export const App = () => {

  return (
    <Provider store={store}>
     <Header/>
      <main>
        <Navigation/>
        <Catalog/>
      </main>
      <footer></footer>
      <ModalDelivery/>
    </Provider>
  );
}


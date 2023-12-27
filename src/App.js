import { Fragment, useState } from "react";
import Header from "./Components/Header/Header";
import Meal from "./Components/Items/Meal";
import Cart from "./Components/Cart/Cart";
import Cartprovider from "./Shop/CartProvider";

function App() {
  const [scart, setscart] = useState(false);
  const showcarthandler = () => {
    setscart(true);
  };
  const hidecarthandler = () => {
    setscart(false);
  };
  return (
    <Cartprovider>
      {scart && <Cart carthandler={hidecarthandler} />}

      <Header carthandler={showcarthandler} />
      <Meal />
    </Cartprovider>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

import Hero from "./components/Hero";
import Products from "./components/Products";
import productData from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your Favourite" data={productData} />
    </Router>
  );
}

export default App;

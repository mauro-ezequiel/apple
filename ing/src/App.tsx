import { useEffect } from "react";
import "./App.scss";
import { Bar } from "./components/nav";
import { Products } from "./components/products";

function App() {
  useEffect(() => {
    document.title = "Apple Store en linea-Apple";
  });

  return (
    <>
      <Bar />
      <section className="container-fluid " id="App">
        <div className="container text-center " id="baner">
          Obtenga entre $180 y $620 en crédito para iPhone 15 o iPhone 15 Pro
          cuando intercambie un iPhone 11 o superior. 3
          <a href="https://www.apple.com/shop/buy-iphone">
            {" "}
            Comprar iPhone<i className="bi bi-chevron-right" id="pico"></i>
          </a>
        </div>
        <div className="row " id="header">
          <div className="col-8" id="h-txt">
            <span id="hb-txt"> Almacenar.</span> La mejor manera <br />
            de comprar los productos que amas.
          </div>
          <div className="col-4">
            <div className="row"></div>
            <div id="mens">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050335"
                alt="etc"
              />
              <span id="mens-txt">¿Necesita ayuda con las compras?</span>
              <br />
              <a href="https://contactretail.apple.com/Help">
                Pregunta a un especialista
              </a>
            </div>
            <div id="mens">
              <i className="bi bi-apple"></i>

              <span id="mens-txt">Visita una tienda Apple</span>
              <br />
              <a href="https://www.apple.com/retail/">
                Encuentra uno cerca de ti
                <i className="bi  bi-chevron-right" id="pico"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Products />
        </div>
      </section>
    </>
  );
}

export default App;

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banniere"
        />
        <div className="home__row">
          <Product
            id="23465465"
            title="Une terre promise (Français) Broché – 17 novembre 2020"
            price="32.00"
            image="https://images-na.ssl-images-amazon.com/images/I/41YXCF1-UAL._SX323_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="2354659"
            title="Écouteurs Bluetooth, BassPal Écouteurs Stéréo sans Fil Blueto..."
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/I/417+j7FxRPL._SCLZZZZZZZ___AA210_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="153465465"
            title="Bouilloire à col de cygne - Bouilloire à café en acier inoxydable de 850 ml avec col de cygne et manche en bois (avec thermomètre)"
            price="137.19"
            image="https://images-na.ssl-images-amazon.com/images/I/51u9FPMIq-L._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="27265465"
            title="Nouveau Apple iPhone 12 Pro Max (512 Go) - Bleu Pacifique"
            price="1609.00"
            image="https://m.media-amazon.com/images/I/71CaXdX4AJL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="234118965"
            title="TTArtisan 50mm F0.95 Camera Lens Full Fame Manual Focus Lens Super Aperture Suitable for Night Scene Shooting Compatible with Leica M Mount Camera Leica M-M M240 M3 M6 M7 M8 M9 M9p M10"
            price="860.00"
            image="https://images-na.ssl-images-amazon.com/images/I/61WS161aXdL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="234008965"
            title="SAMSUNG C49RG94SSU écran Plat de PC 124,5 cm (49') UltraWide Dual Quad HD"
            price="1128.52"
            image="https://images-na.ssl-images-amazon.com/images/I/61xii2TG6DL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

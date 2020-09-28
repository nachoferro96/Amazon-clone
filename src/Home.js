import React from "react";
import "./Home.css";
import Product from "./Product";

export default function home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="banner"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
          alt="asd"
        />

        <div className="home_row">
          <Product title="React easy course Book by Hardvard University from United State of America"
          price={19.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41301Q9P5NL.jpg"/>
          <Product
          title="Martin & Co 1863 Acoustic Guitar D-28 model solid top mahony body 6 string with case + pick + chord book Eric Clapton Signature model OO28M-S" 
          price={1299.99}
          rating={5}
          image="http://pngimg.com/uploads/guitar/guitar_PNG3371.png"/>
        </div>
        <div className="home_row">
          <Product title="Xiaomi Band 4 By Xiamo Chinese Smartwatch waterproof + 5 strips" 
          price={35.29}
          rating={4}
          image="https://http2.mlstatic.com/D_NQ_NP_2X_868903-MLA43425786036_092020-F.webp"/>
          <Product image="https://http2.mlstatic.com/D_NQ_NP_2X_898103-MLA32556737376_102019-F.webp"
          title="Sony Ps4 Original Factory New Joystic with Original manual garanty until 2022 uncharted version"
          price={58.99}
          rating={5}/>
          <Product image="https://http2.mlstatic.com/D_NQ_NP_2X_864864-MLA40381639723_012020-F.webp"
          title="Termo Stanley 1L original varios colores garantia 48hs mantiene temperatura del agua con tapa para mate y demas"
          price={50.99}
          rating={4}
           />
        </div>
        <div className="home_row">
          <Product image="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/MON401.jpg"
          title="Monitor curvo ultra wide 34 pulgadas 144hz gaming Full HD o-Led teconology con salida HMDI free Sync and color Balance"
          price={349.99}
          rating={4}/>
        </div>
      </div>
    </div>
  );
}

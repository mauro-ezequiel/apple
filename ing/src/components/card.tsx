import React from "react";
import "../style/products.scss";
interface infoCard {
  img: string;
  title: string;
  url: string;
}

export const CardP: React.FC<infoCard> = ({ img, title, url }: infoCard) => {
  return (
    <div id="container">
      <img src={img} alt="image" />
      <a href={url}>
        <h5>{title}</h5>
      </a>
    </div>
  );
};

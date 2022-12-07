import React from "react";
import { motion } from "framer-motion";
import { Col } from "reactstrap";

import PrivateLink from "./PrivateLink";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "../../styles/product-card.css";
import { useRef } from "react";

// TODO: 1.Favorites; 2.How to show condition?

const ProductCard = ({ item }) => {
  const favRef = useRef(null);

  const changeFav = (ev, item) => {
    if (favRef.current.classList.contains("fav__saved")) {
      favRef.current.classList.remove("fav__saved");
      toast.info(`${item.productName} removed from watchlist!`);
    } else {
      favRef.current.classList.add("fav__saved");
      toast.success(`${item.productName} added to watchlist!`);
    }
  };

  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <PrivateLink to={`/shop/${item.id}`}>
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </PrivateLink>
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <PrivateLink to={`/shop/${item.id}`}>
              {item.productName}
            </PrivateLink>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <span className="publicDate ">{item.publicDate}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;

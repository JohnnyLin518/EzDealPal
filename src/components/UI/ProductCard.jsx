import React from "react";
import { motion } from "framer-motion";
import { Col } from "reactstrap";

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
          <Link to={`/shop/${item.id}`}>
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </Link>
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <span
            className="fav__icon"
            ref={favRef}
            onClick={(ev) => changeFav(ev, item)}
          >
            <i class="ri-heart-add-line"></i>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;

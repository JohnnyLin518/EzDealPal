import React from "react";
import { motion } from "framer-motion";
import { Col } from "reactstrap";

import PrivateLink from "./PrivateLink";
import { Link } from "react-router-dom";

import "../../styles/product-card.css";
import { useRef } from "react";

// TODO: 1.Favorites; 2.How to show condition?

const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <Link to={`/itemDetails/${item.productID}`}>
            <motion.img whileHover={{ scale: 0.9 }} src={item.url} alt="" />
          </Link>
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/itemDetails/${item.productID}`}>
              {item.productName}
            </Link>
          </h3>
          <span>{item.productKeywords}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="">{item.userId}</span>
          <span className="publicDate ">{item.publicDate}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;

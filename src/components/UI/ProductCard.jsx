import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";

import PrivateLink from "./PrivateLink";

const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          {/* 点击 img link to 商品详情页 */}
          <PrivateLink to={`/shop/${item.productID}`}>
            {/* 显示item的第一张图片并添加动画，鼠标移动到图片上时，图片会变小 */}
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.pictureID}
              alt=""
            />
          </PrivateLink>
        </div>
        <div className="product__info">
          <h3 className="product__name">
            {/* 点击商品名称时也会跳转 */}
            <PrivateLink to={`/shop/${item.productID}`}>
              {item.productName}
            </PrivateLink>
          </h3>
          <span>{item.created_date}</span>
          <span>{item.last_modified_date}</span>
          <div>
            <span className="price">{item.price}</span>
            <span className="condition"></span>
          </div>
        </div>
      </div>
    </Col>
  );
};                               

export default ProductCard;

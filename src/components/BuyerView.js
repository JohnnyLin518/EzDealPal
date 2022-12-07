import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "./UI/ProductsList";
import { message, Pagination } from "antd";

import { getProducts } from "../utils";
import products from "../assets/data/products";
import CommonSection from "./UI/CommenSection";
import "../styles/buyer-view.css";
import ZipcodeForm from "./UI/ZipcodeForm";
const BuyerView = () => {
  const [productsData, setProductsData] = useState(products);

  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     getProducts(66952, 2000)
  //       .then((productsData) => {
  //         setProductsData(productsData);
  //       })
  //       .catch((err) => {
  //         message.error(err.message);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, [productsData]);

  const handleFilter = (e) => {
    const filteValue = e.target.value;
    if (filteValue === "5") {
      const filteredProducts = products
        .filter
        // (item) => item.dsitance === "home"
        ();
      setProductsData(filteredProducts);
    }
    if (filteValue === "10") {
      const filteredProducts = products.filter();
      setProductsData(filteredProducts);
    }
    if (filteValue === "20") {
      const filteredProducts = products.filter(
        (item) => item.category === "jewelry"
      );
      setProductsData(filteredProducts);
    }
    if (filteValue === "30") {
      const filteredProducts = products.filter(
        (item) => item.category === "toy"
      );
      setProductsData(filteredProducts);
    }
    if (filteValue === "40") {
      const filteredProducts = products.filter(
        (item) => item.category === "sporting"
      );
      setProductsData(filteredProducts);
    }
    if (filteValue === "50") {
      const filteredProducts = products.filter(
        (item) => item.category === "clothing"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <>
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="form__widget">
                <ZipcodeForm></ZipcodeForm>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Distance</option>
                  <option value="5">5km</option>
                  <option value="10">10km</option>
                  <option value="20">20km</option>
                  <option value="30">30km</option>
                  <option value="40">40km</option>
                  <option value="50"> &gt;50km</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No items are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </>
    /*<section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="zipcode__input">
                <input type="text" placeholder="Please input your zipcode" />
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Distance</option>
                  <option value="5"> 5km </option>
                  <option value="10">10km</option>
                  <option value="20">20km</option>
                  <option value="30">30km</option>
                  <option value="40">40km</option>
                  <option value="50">50km</option>

                  <option value="2000"> &lt 30km</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No items are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section> */

    /* <section>
        <Row>
          <Pagination
            total={85}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </Row>
      </section> */
  );
};

export default BuyerView;

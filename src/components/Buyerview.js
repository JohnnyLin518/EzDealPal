import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "./UI/ProductsList";
import { message, Pagination } from "antd";

import { getProducts, search } from "../utils";
import response from "../assets/response.json";
import "../styles/buyer-view.css";
import ZipcodeForm from "./UI/ZipcodeForm";

const BuyerView = () => {
  const [productsData, setProductsData] = useState(response);
  //   const initProducts = [];
  //   initProducts = productsData;
  //   console.log("init", initProducts);
  const [zipcode, setZipcode] = useState(0);
  const [distance, setDistance] = useState(0);

  const searchRef = useRef();
  const zipcodeRef = useRef();
  //   useEffect(() => {
  //     getProducts(zipcode, distance)
  //       .then((productsData) => {
  //         setProductsData(productsData);
  //       })
  //       .catch((err) => {
  //         message.error(err.message);
  //       });
  //   }, [zipcode, distance]);

  const handleSelect = (e) => {
    // console.log(e.target.value);
    // setDistance(e.target.value);
    setProductsData(response);
    const value = e.target.value;
    const selectedProducts = productsData.filter(
      (item) => value >= item.distance
    );
    setProductsData(selectedProducts);
  };

  const handleZipcode = () => {
    setProductsData(response);
    const value = zipcodeRef.current.value;
    // setZipcode(value);
    // console.log(value);
    const products = productsData.filter((item) => item.zipcode === value);
    setProductsData(products);
  };

  const handleSearch = () => {
    const searchTerm = searchRef.current.value;
    if (!searchTerm) {
      setProductsData(response);
      return;
    }

    console.log(searchTerm);
    const searchedProducts = productsData.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.productKeywords.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  const handleReset = (e) => {
    const searchTerm = e.target.value;
    if (!searchTerm) {
      setProductsData(response);
      return;
    }
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="form__widget">
                <input type="text" placeholder="zipcode" ref={zipcodeRef} />
                <button type="primary" onClick={handleZipcode}>
                  submit
                </button>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleSelect} placeholder="Choose Distance">
                  <option value={5}>5km</option>
                  <option value={10}>10km</option>
                  <option value={20}>20km</option>
                  <option value={30}>30km</option>
                  <option value={40}>40km</option>
                  <option value={1000}> &gt;50km</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search...."
                  ref={searchRef}
                  onChange={handleReset}
                />
                <span onClick={handleSearch}>
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

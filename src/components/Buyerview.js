import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "./UI/ProductsList";
import { message, Pagination } from "antd";

import { getProducts, search } from "../utils";
// import response from "../assets/response.json";
import "../styles/buyer-view.css";
import ZipcodeForm from "./UI/ZipcodeForm";

const BuyerView = () => {
  const [originalProductsData, setOriginalProductsData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  //   const initProducts = [];
  //   initProducts = productsData;
  //   console.log("init", initProducts);
  const [zipcode, setZipcode] = useState(30304);
  const [distance, setDistance] = useState(5);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef();
  const zipcodeRef = useRef();

  useEffect(() => {
    console.log(zipcode, distance);
    setLoading(true);
    getProducts(zipcode, distance)
      .then((productsData) => {
        setOriginalProductsData(productsData);
        setProductsData(productsData);
      })
      .catch((err) => {
        message.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [zipcode, distance]);

  const handleSelect = (e) => {
    // setProductsData(response);  // Remove this line

    setLoading(true); // Set loading state to true

    // Get the distance value from the select input
    const value = e.target.value;
    console.log(zipcode, value);
    setDistance(value);
    // Call the getProducts function with the new distance value
    // getProducts(zipcode, value)
    //   .then((productsData) => {
    //     setProductsData(productsData); // Update the productsData state with the new list of products
    //   })
    //   .catch((err) => {
    //     message.error(err.message);
    //   })
    //   .finally(() => {
    //     setLoading(false); // Set loading state to false when finished
    //   });
  };

  const handleZipcode = () => {
    setLoading(true);
    const value = zipcodeRef.current.value;
    // setZipcode(value);
    // console.log(value);
    console.log(value, distance);
    setZipcode(value);
    // getProducts(value, distance)
    //   .then((productsData) => {
    //     setProductsData(productsData); // Update the productsData state with the new list of products
    //   })
    //   .catch((err) => {
    //     message.error(err.message);
    //   })
    //   .finally(() => {
    //     setLoading(false); // Set loading state to false when finished
    //   });
  };

  const handleSearch = () => {
    const searchTerm = searchRef.current.value;
    if (!searchTerm) {
      setProductsData(originalProductsData);
      return;
    }

    console.log(searchTerm);
    console.log(originalProductsData);
    const searchedProducts = originalProductsData.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.productKeywords.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(searchedProducts);
    setProductsData(searchedProducts);
  };

  const handleReset = (e) => {
    const searchTerm = e.target.value;
    if (!searchTerm) {
      setProductsData(originalProductsData);
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
                  <option value={10000}> &gt;50km</option>
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
            {loading === true ? (
              <h1 className="text-center fs-4">Pleas wait...</h1>
            ) : productsData.length === 0 ? (
              <h1 className="text-center fs-4">No items are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BuyerView;

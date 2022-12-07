import React from "react";
import { Pagination } from "antd";
import { Container, Row, Col } from "reactstrap";

import ProductsList from "./UI/ProductsList";

const SellerView = () => {
  return (
    <>
      <Pagination
        total={85}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={20}
        defaultCurrent={1}
      />
    </>
  );
};

export default SellerView;

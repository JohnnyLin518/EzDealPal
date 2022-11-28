import React from "react";
import { Pagination } from "antd";

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

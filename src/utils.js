export const login = (credential) => {
  const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;

  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to log in");
    }
  });
};

export const signup = (data) => {
  const signupUrl = "/signup";

  return fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to sign up");
    }
  });
};

export const getProducts = (zipcode, distance) => {
  //http://localhost:8081/EzDealPal_war_exploded/search?zip_code=30304&distance=10
  console.log(
    `http://localhost:8081/EzDealPal_war_exploded/search?zip_code=${zipcode}&distance=${distance}`
  );
  return fetch(
    `http://localhost:8081/EzDealPal_war_exploded/search?zip_code=${zipcode}&distance=${distance}`
  ).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to getproducts");
    }
    return response.json();
  });
};

export const getAllProducts = () => {
  return fetch(`/search?zip_code=66952&distance=2000`).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to getproducts");
    }
    return response.json();
  });
};

export const getSellerView = (UserID) => {
  return fetch(`/sell/${UserID}`).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get SellerView");
    }
    return response.json();
  });
};

// export const getItemDetails = (ProductID) => {
//   return fetch(`/itemdetails/${ProductID}`).then((response) => {
//     if (response.status < 200 || response.status >= 300) {
//       throw Error("Fail to get ItemDetail");
//     }
//     return response.json();
//   });
// };

export const getItemDetails = (ProductID) => {
  ///product/${ProductID}
  const url = `http://localhost:8080/product/${ProductID}/`;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get ItemDetail");
    }
    return response.json();
  });
};

export const PostProduct = (data) => {
  return fetch("http://localhost:8080/addProduct/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to post item");
    }
  });
};

export const EditProduct = (data) => {
  return "Success";
  // return fetch(`/EditItem/${ProductID}`, {
  //     method: "POST",
  //     headers: {
  //         "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  // }).then((response) => {
  //     if (response.status <200 || response.status >= 300) {
  //         throw Error("Fail to edit item");
  //     }
  // });
};

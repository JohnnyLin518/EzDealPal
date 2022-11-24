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
        throw Error("Fail to Log in");
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
        throw Error("Fail to Sign up");
      }
    });
  };

export const getItemsInfo = (zipcode) => {
    return fetch(`/buy/${zipcode}`).then((response) => {
        if(response.status < 200 || response.status >= 300) {
            throw Error("Fail to get Items List");
        } 
        return response.json();
    });
  };

export const getItemDetails =(productID) => {
    return fetch(`/buy/${productID}`).then((response) => {
        if(response.status < 200 || response.status >= 300) {
            throw Error("Fail to See the Item Details");
        }
        return response.json();
    });
  };

export const postedInfo = (userID) => {
    return fetch(`/sell/${userID}`).then((response) => {
        if(response.status < 200 || response.status >= 300) {
            throw Error("Fail to see Items you posted");
        }
        return response.json();
    });
  };

export const postItem = (data) => {
    const postUrl ="/postItem";
    return fetch(postUrl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    }).then((response) => {
        if(response.status < 200 || response.status >= 300) {
            throw Error("Fail to Post Item");
        }
        return response.json();
    });
  };

export const EditContent = (productID) => {
    return fetch(`/edit/${productID}`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
    }).then((response) => {
        if(response.status < 200 || response.status >= 300) {
            throw Error("Fail to Edit Item");
        }
        return response.json();
    });
};


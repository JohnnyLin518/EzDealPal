export const home1 = () => {
    return fetch("/").then((response) => {
        if(response.status < 200 ||response.status >= 300){
            throw Error("Fail to go to Homepage");
        }
        return response.json();
    });
};

export const home2 = () => {
    return fetch("/home").then((response) => {
        if(response.status < 200 ||response.status >= 300){
            throw Error("Fail to go to Homepage");
        }
        return response.json();
    });
};

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
    }).then((response)=> {
        if(response.status <200 || response.status >= 300){
            throw Error("Fail to sigh up");
        }        
    });
};

export const getBuyerView = (zipcode) => {
    return fetch(`/buy/${zipcode}`).then((response) => {
        if(response.status <200 || response.status >= 300) {
            throw Error("Fail to get local information");
        }
        return response.json();
    });
};

export const getSellerView = (UserID) => {
    return fetch(`/sell/${UserID}`).then((response) => {
        if(response.status <200 || response.status >= 300) {
            throw Error("Fail to get SellerView");
        }
        return response.json();
    });
};

export const getItemDetails = (ProductID) => {
    return fetch(`/ItemDetails/${ProductID}`).then((response) => {
        if(response.status <200 || response.status >= 300) {
            throw Error("Fail to get ItemDetail");
        }
        return response.json();
    });
};

export const PostItem = (data) => { 
    return fetch("/PostItem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.status <00 || response.status >= 300) {
            throw Error("Fail to post item");
        }
    });
};

export const EditItem =(ProductID) => {
    return fetch(`/EditItem/${ProductID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.status <00 || response.status >= 300) {
            throw Error("Fail to edit item");
        }
    });
};

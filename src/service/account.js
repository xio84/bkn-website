import axios from "axios"

export async function loginPost(email, password, remember) {
    // TODO: implement remember me
    return axios.post(
        process.env.REACT_APP_BASE_URL + "/login",
        {
            "email": email,
            "password": password
        })
    .then((res) => {
        console.log("Login success");
        return window.sessionStorage.setItem("auth", res.data["data"]["authorization"])
    })
}

export async function signupPost(email, password, name, numphone) {
    // TODO: implement remember me
    return axios.post(
        process.env.REACT_APP_BASE_URL + "/register",
        {
            "email": email,
            "password": password,
            "name": name,
            "numphone": +628115128170
        })
}

export async function getProfile(auth) {
    return axios.get(
        process.env.REACT_APP_BASE_URL + "/account/profile", {
            headers: {
                Authorization: "Bearer " + auth
            }
        })
}

export async function getOrders(auth) {
    return axios.get(
    process.env.REACT_APP_BASE_URL + "/account/wallet/order", {
        headers: {
            Authorization: "Bearer " + auth
        }
    })
}

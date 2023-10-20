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
        console.log(res);
        console.log("Login succ");
        return window.sessionStorage.setItem("auth", res.data["authorization"])
    })
}

export async function signupPost(email, password, name, numphone) {
    // TODO: implement remember me
    return axios.post(
        process.env.BE_URL + "/register",
        {
            "email": email,
            "password": password,
            "name": name,
            "numphone": +628115128170
        })
}

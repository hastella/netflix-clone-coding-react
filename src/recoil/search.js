import { atom } from "recoil";

export const searchState = atom({
    key: "search",
    default: ""
})

export const loginState = atom({
    key: "email",
    default:""
})
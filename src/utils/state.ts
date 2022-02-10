import { atom } from "recoil";

export const SignatureAtom = atom({
    key: "signature",
    default: null
})

export const APIKeyAtom = atom({
    key: "api_key",
    default: null
})
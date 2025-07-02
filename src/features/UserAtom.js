import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();


const userContextAtom = atom({
    key: "userContext", 
    default: {
        userId: null,
        userName: null,
        token: null,
        isAuthenticated: false,
        points: null
    },
    effects_UNSTABLE: [persistAtom],
})

export default userContextAtom;
import { selector } from "recoil"
import { userDetail } from "./Atom";

export const charCount = selector({
    key: "charCount",
    get: ({get}) => {
        const text = get(userDetail);
        return text.name.length
    }
});

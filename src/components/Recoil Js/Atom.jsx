import { atom } from "recoil";

export const userDetail = atom({
    key: 'userInfo',
    default: {
        userId: 'CS117',
        name: 'Hello World!'
    }
});

export const empDetail = atom({
    key: 'empInfo',
    default: {
        empId: 'EMP115',
        name: 'John Smith'
    }
})
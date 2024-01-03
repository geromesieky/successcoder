import { ADD_PAYEMENT } from "../constants";

export const addPayment = (cartCourses, total) => {
    return {
        type: ADD_PAYEMENT,
        orderInfos: {
            courses: cartCourses,
            total: total
        }
    }
}
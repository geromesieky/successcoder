import PaidCourse from "../../data/PaidCourseModel";
import { ADD_TO_CART, REMOVE_COURSE_CART, ADD_PAYEMENT } from "../constants";

const initialState = {
    cartCourses: [], // {idCourse, price, title}
    total: 0
}

const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const course = action.course;
            const idCourse = course.id;
            const price = course.price;
            const title = course.title;

            const newCourse = new PaidCourse(idCourse, price, title);

            return {
                ...state,
                cartCourses: state.cartCourses.concat(newCourse),
                total: state.total + price
            }
        
        case REMOVE_COURSE_CART:
            const indexResult = state.cartCourses.findIndex( course => course.id === action.prodId );
            const newCartCoursesArray = [...state.cartCourses];
            newCartCoursesArray.splice(indexResult, 1);

            const coursePrice = state.cartCourses[indexResult].price;

            return {
                ...state,
                cartCourses: newCartCoursesArray,
                total: state.total - coursePrice
            }
        
        case ADD_PAYEMENT:
            return initialState;
    
        default:
            return state;
    }
}

export default reducerCart;
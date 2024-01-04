import COURSES from '../../data/testData';
import { ADD_TO_CART, REMOVE_COURSE_CART, DELETE_COURSE } from '../constants';

const initialState = {
    existingCourses: COURSES,
    loggedInmemberCourses: COURSES.filter( course => course.instructorId === '1')
}

const reducerCourses = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const indexCourseToModify = state.existingCourses.findIndex( course => course.id === action.course.id);

            const copyExistingCourses = [...state.existingCourses];
            copyExistingCourses[indexCourseToModify].selected = true;
            return {
                ...state,
                existingCourses: copyExistingCourses,
                loggedInmemberCourses: state.loggedInmemberCourses
            }

        case REMOVE_COURSE_CART:
            const indexCourseToDeleteFromCart = state.existingCourses.findIndex( course => course.id === action.prodId);
            const copyExistingCoursesRemoved = [...state.existingCourses];
            copyExistingCoursesRemoved[indexCourseToDeleteFromCart].selected = false;
            return {
                ...state,
                existingCourses: copyExistingCoursesRemoved,
                loggedInmemberCourses: state.loggedInmemberCourses
            }
        
        case DELETE_COURSE:
            return {
                ...state,
                existingCourses: state.existingCourses.filter( course => course.id !== action.courseId),
                loggedInmemberCourses: state.loggedInmemberCourses.filter( course => course.id !== action.courseId)
            }
    
        default:
            return state;
    }
}

export default reducerCourses;
import { ADD_PAYEMENT } from "../constants";
import PaymentModel from "../../data/PaymentModel";
import moment from "moment";

const initialState = {
    payments: []
}

const reducerPayment = (state= initialState, action) => {
    switch (action.type) {
        case ADD_PAYEMENT:
            //{id, courses, total, date}
            const newPayment = new PaymentModel(
                Date.now().toString(),
                action.orderInfos.courses,
                action.orderInfos.total,
                moment(new Date()).format('DD MM YYYY hh:mm')
            );
            
            return {
                ...state,
                payments: state.payments.concat(newPayment)
            }
    
        default:
            return state;
    }
}

export default reducerPayment;
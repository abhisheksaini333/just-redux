// import redux
const  { createStore } = require("redux");


// create an initial state
const initialState = {
    balance: 10000
};


// create mechanism to update the state : reducer
const reducer = (state = initialState, action) => {
    let newState = { ...state };
    // logic to update the state
    switch (action.type) {
        case "WITHDRAW":
            newState.balance = newState.balance - action.value;
            break;
        case "DEPOSIT":
            newState.balance = newState.balance + action.value;
            break;
        default:
    }

    return newState;
}


// create store and pass the reducer to it : store
const store = createStore(reducer);

console.log("Initial Balance : " + initialState.balance);

// a subcriber : subscribe
store.subscribe(() => {
    console.log("Updated Balance : " + store.getState().balance);
});


// a publisher : dispatch
store.dispatch({
    type: "WITHDRAW",
    value: 1000
});

store.dispatch({
    type: "DEPOSIT",
    value: 2000
});
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});

const mapDispatchToProps = dispatch => ({
    addOne: () => dispatch({ type: "INCREMENT" }),
    addTen: () => dispatch({ type: "PLUSTEN" }),
    minusOne: () => dispatch({ type: "DECREMENT" }),
    minusTen: () => dispatch({ type: "MINUSTEN" }),
    resetter: () => dispatch({ type: "BACKTOSTART" })
});

const CounterContainer = ({ counter, addOne, addTen, minusOne, minusTen, resetter }) => (
    <>
        <p>{counter}</p>
        <div className="btn-container">
            <button onClick={addOne}>PLUS ONE</button>
            <button onClick={addTen}>PLUS TEN</button>
            <button onClick={resetter}>RESET</button>
            <button onClick={minusTen}>MINUS TEN</button>
            <button onClick={minusOne}>MINUS ONE</button>
        </div>
    </>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);
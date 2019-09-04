import React from 'react';
import Button from "../../UI/Button/Button";

const orderSummary = props => {

    // const ingredientSummary = Object.keys(props.ingredients)
    //     .map(igKey =>
    //         <li key={igKey}>
    //             <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
    //         </li>
    //     );

    const ingredientSummary = Object.entries(props.ingredients)
        .map(([key, value]) =>
            <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {value}
            </li>
        );

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </>
    )
};

export default orderSummary;
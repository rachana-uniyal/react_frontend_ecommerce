import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ( { price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JjGJQSBOjcnKNHc2zSy7tuuGkZYeVasrjJXpmEiV2g1VVudgCw3CWwlqOXtbSDFOLlaFtG5ic4iwSwc9M08XI0f00jGiuFYjB'

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

    return(
        <StripeCheckout 
            label='Pay Now'
            name=' ECOMM Site'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is {price}`}
            amount ={priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
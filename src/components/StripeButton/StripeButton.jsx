import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_90L6RlI0I8yrKZ6I8FfRgovp00C0X7abJh";

  const onToken = token => {
    alert("PAyment Successful");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Crwn Clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com//i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;

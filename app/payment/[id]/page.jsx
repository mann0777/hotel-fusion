'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = () => {
    const { id } = useParams();
    const [hotelDetails, setHotelDetails] = useState(null);

    useEffect(() => {
        const fetchHotelDetails = async () => {
            const response = await fetch(`/api/example/hotels/${id}`);
            if (response.ok) {
                const data = await response.json();
                setHotelDetails(data);
            } else {
                console.error('Failed to fetch hotel details');
            }
        };

        fetchHotelDetails();
    }, [id]);

    const createOrder = async (data, actions) => {
      try {
          const response = await fetch('/api/example/payment', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ amount: hotelDetails.price }),
          });

          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Failed to create order');
          }

          const orderData = await response.json();
          return orderData.id; // This is the PayPal order ID returned from your API
      } catch (error) {
          console.error('Error creating PayPal order:', error);
          alert(error.message); // Display error message to user
      }
  };

    const onApprove = async (data, actions) => {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Optionally save transaction details here
        });
    };

    if (!hotelDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
            <p className="mb-2">Hotel: {hotelDetails.name}</p>
            <p className="mb-4">Price: ${hotelDetails.price}</p>

            <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
                <PayPalButtons 
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    );
}

export default Payment;

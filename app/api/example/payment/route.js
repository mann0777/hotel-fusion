import { NextResponse } from "next/server";
import paypal from '@paypal/checkout-server-sdk';
import connectDB from "@/db";

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const { amount } = body;

        // Correctly create the request for PayPal
        let paypalRequest = new paypal.orders.OrdersCreateRequest(); // Use a different name to avoid conflict
        paypalRequest.prefer("return=representation");
        paypalRequest.requestBody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'CAD', // Change this to your desired currency
                    value: amount,
                },
            }],
        });

        const order = await client.execute(paypalRequest); // Use the correct variable name

        return NextResponse.json({ id: order.result.id });
    } catch (error) {
        console.error('Failed to create order:', error);
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}

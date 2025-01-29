import Product from "@/app/product/[slug]/page";
import { title } from "process";
import { defineArrayMember, Preview } from "sanity";

const orders = {
    name: "vendors",
    title: "Vendors",
    type: "document",
    fields: [
      {
        name: "ordernumber",
        title: "Order Number",
        type: "string",
      },
      {
        name:"StripeCheckoutSessionId",
        title:"Strpe Checkout Session Id",
        type:"string",
      },
      {
        name:"StripeCustomerId",
        title:"Stripe Customer Id",
        type:"string",
      },
      {
        name:"ClerkUserId",
        title:"Store User Id",
        type:"string",
      },
      {
        name:"email",
        title:"Customer Email",
        type:"string",
      },
      {
        name:"StripePaymentIntentId",
        title:"Stripe Payment ID",
        type:"string",
      },
      {
        name:"products",
        title:"Products",
        type: "array",
        of: [
            defineArrayMember({
                type: "object",
                fields: [
                    {
                        name: "product",
                    title: "Product Bought",
                    type: "reference",
                    to: [{type:"products"}]
                    },
                {
                    name: "quantity",
                    title: "Quantity Purchased",
                    type: "number",
                }
                ],
                preview:{
                    select:{
                        product:"products.title",
                        quantity: "quantity",
                        image: "products.image",
                        price: "products.price",
                        currency: "products.currency"
                    },
                    prepare(select){
                        return{
                            title:` ${select.product} X ${select.quantity}`,
                            subtitle:`${select.price*select.quantity}`,
                            media:select.image
                        }
                    }
                }
            })
        ],
      },

      {
        name: "totalPrice",
        title: "Total Price",
        type: "number",
      },
      {
        name: "currency",
        title: "Currency",
        type: "string",
      },
      {
        name: "amountDiscount",
        title: "Amount Discount",
        type: "number",
      },
      {
        name:"status",
        title:"Order Status",
        type:"string",
        options:{
           list: [
                {
                    title:"Pending",
                    value:"pending"},
                {
                    title:"Paid",
                    value:"paid"},
                {
                    title:"Shipped",
                    value:"shipped"},
                {
                    title:"Delivered",
                    value:"delivered"},
                {
                    title:"Cancelled",
                    value:"cancelled"},
            ]

        }
      },
      {
        name:"orderDate",
        title:"Order Date",
        type:"datetime",
      }
      
    ],
    Preview:{
        select:{
            name: "CustomerName",
            email:"email",
            // products:"products",
            // status:"status",
            // orderDate:"orderDate",
            amount:"totalPrice",
            orderId: "orderNumber",
            currency:"currency",
            // amountDiscount:"amountDiscount"
        },
        prepare(select:any){
            const orderIdSnippet = `${select.orderId.slice(0,5)}...${select.orderId.slice(-5)}`
            return{
                title:`${select.name} (${orderIdSnippet})`,
                subtitle:`${select.amount} ${select.currency}, ${select.email}`,
                // media:BasketIcon
        }
    }
}
}

export default orders
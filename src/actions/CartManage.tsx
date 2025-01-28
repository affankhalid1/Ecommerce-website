import { client } from "@/sanity/lib/client";



export const CartManager = async (id: string, quantity: number, userID: string) =>{
    if(!userID){
        return
    }

    try{
        const results = await client.fetch(`*[_type == "products" && _id  == "${id}" || _type == "beds" && _id  == "${id}" ]`)

            const product = results[0]
            const productData = {
                _id: `item-${product._id}-${userID}`,
                _type: "cartItems", 
                productId: product._id,
                slug: product.slug.current,
                productName: product.title,
                price: product.price,
                image: product.image,
                quantity: quantity,
                userId:userID}

                const response = await client.createOrReplace(productData)
                console.log("Item addded to cart", response)

                return response
        
    }

    catch(error){
        console.error("error adding to cart1", error)
                throw error
    }

}

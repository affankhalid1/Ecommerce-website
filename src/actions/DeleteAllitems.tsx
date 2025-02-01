import { client } from "@/sanity/lib/client";



export const DeleteAllItem = async (id: string) =>{


    try{
            let query = `*[ _type == "cartItems" && userId == "${id}"]`;
            const cartdata = await client.fetch(query);
            let deltePromises = cartdata.map( (item: any) => {
                 client.delete(item._id);  //Deletes each item
            })

            await Promise.all(deltePromises);  // Execute all deletions
            console.log("Purchased Items deleted from cart", cartdata)
    }

    catch(error){
        console.error("error deleting cart items", error)
                throw error
    }

}

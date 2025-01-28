import { client } from "@/sanity/lib/client";



export const DeleteItem = async (id: string) =>{


    try{
            await client.delete(id)
    }

    catch(error){
        console.error("error deleting from cart", error)
                throw error
    }

}

import { libros } from "$lib/database/data.js";
import { db } from "$lib/database/client.js";


export const load = async () => {
    
    const myBook = await db.query.libros.findMany();

    console.log(myBook);
    
    return {
        myBook
    };
}
"use server"
import { revalidateTag } from "next/cache"

export const updateCounter = async (amount: Number)=> {
    if(!amount) return;

    await fetch("http://localhost:3000/counter", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
            amount,
        }),
        headers: {
            "content-type" : "application/json"
        },       
    })

    revalidateTag("counter");
}

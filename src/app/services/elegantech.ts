import SendMessagePayload from "@/app/interfaces/SendMessagePayload";

export async function sendMessage(payload: SendMessagePayload) : Promise<Response>{
    const response = await fetch(
        "/api/elegantech",
        {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    return response
}
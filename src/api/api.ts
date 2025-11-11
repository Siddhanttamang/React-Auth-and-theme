import type { LoginRequest, LoginResponse } from "../types/global";

export const loginUser = async(payload:LoginRequest):Promise<LoginResponse>=>{
    const response= await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    })
        if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
    }

    const data: LoginResponse = await response.json();
    return data;
}


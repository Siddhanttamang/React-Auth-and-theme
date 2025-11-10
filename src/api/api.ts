export interface User{
    id:number;
    email:string;
    name:string;
    role:string;
}
export interface LoginRequest{
    email:string;
    password:string;
}
export interface LoginResponse{
    access_token:string;
    user?:User;
}
export interface WeatherRequest{
    city:string;
}
export interface WeatherResponse{
    city:string;
    temperature:number;

}
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
export const fetchWeather= async(weatherRequest:WeatherRequest):Promise<WeatherResponse>=>{
       
        const response= await fetch(`http://localhost:5000/api/weather?${weatherRequest.city}`)
        if(!response.ok){
            const errorData= await response.json();
            throw new Error(errorData.message || "Failed to fetch weather")  
          }
        const data: WeatherResponse =await response.json();
        return data;
    

}
// Create PublicUser type that hides password. (Hint: Omit)

// Create UserUpdate type that allows partial updates. (Hint: Partial)

// Create a UserCredentials type for login. (Hint: Pick)

// Create a RoleAccess object using Record<"admin" | "user", string[]> to list allowed pages for each role.
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   role: "admin" | "user";
// }
// type PublicUser= Omit<User,"password">
// const UserUpdate=(id:User["id"],updates:Partial<User>)=>{

// }
// type UserCredentials=Pick<User,"email"|"password">
// type Role="admin" |"user"
// interface Access{
//     canEdit:boolean;
//     canDelete:boolean;
//     canView:boolean;

// }
// const RoleAccess:Record<Role,Access>={
//     admin:{canDelete:true,canEdit:true,canView:true},
//     user:{canDelete:false,canEdit:false,canView:true}
// }
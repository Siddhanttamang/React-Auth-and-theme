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
export interface User{
    id:number;
    email:string;
    name:string;
    role:string;
    address:string;
    contact:string;

}
export interface LoginRequest{
    email:string;
    password:string;
}
export type GooglePayload = {
  name?: string;
  email?: string;
  picture?: string;
  
};
export interface LoginResponse{
    access_token:string;
    user?:User;
}
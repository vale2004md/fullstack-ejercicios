import  { Role } from "../../common/types/user.type";

export class CreateUserDto {
    name: string; 
    email: string;
    age: number;
    roles?: Role[] = [Role.USER]; 
}

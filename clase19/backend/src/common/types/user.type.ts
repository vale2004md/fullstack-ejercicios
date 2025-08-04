export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    roles: Role[];
}

export enum Role {
    USER = 'user',
    ADMIN = 'admin',
    MODERATOR = 'MODERADOR',
}


// enum Role { ADMIN = 'ADMIN', READ_ONLY, AUTHOR = 200} you can also assign your own values
const person :{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: Maximilian;
    age: 30;
    hobbies: ['Sports', 'Cooking']
    role: Role.ADMIN
};

person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
// let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies ) {
    console.log(hobby.toUpperCase());
}
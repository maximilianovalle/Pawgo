// All Javascript is valid Typescript - the latter simply adds types, interfaces, and compile-time checks.
// Typescript helps you catch mistakes early - before runtime.


// Variable Declaration:

    // Javascript --
    let myName = "Max";
    myName = 42;    // no error until runtime

    // Typescript --
    let myNameTS: string = "Max";
    myNameTS = 42;    // error


// Type Interface

    let isActive = true;    // inferred as boolean type
    isActive = "false"; // error


// Function Parameters and Return Types:

    // Javascript --
    function greet(user) {
        return "Hello " + user;
    }

    // Typescript --
    function greetTS(user: string): string {
        return "Hello " + user;
    }


// Interfaces and Object Types:

    // Javascript
    const user = { name: "Max", age: 22 };
    console.log(user.name);

    // Typescript
    interface User {
        name: string;
        age: number;
    }

    const userTS: User = { name: "Max", age: 22 };
    console.log(userTS.name);


// Type Safety in Arrays:

    // Javascript
    let scores = [22, "twenty-two", true];

    // Typescript
    let scoresTS: number[] = [22, 23, 24];


// Optional Properties:

    interface Product {
        name: string;
        price?: number; // optional
    }

    const item: Product = { name: "Pen" };
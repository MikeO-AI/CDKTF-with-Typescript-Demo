// Enum for Duck Types
enum DuckType {
    Mallard = "Mallard",
    Muscovy = "Muscovy",
    Pekin = "Pekin",
    Mandarin = "Mandarin" // New DuckType added
  }
  
  // Type for Duck Colors using Union Type
  type DuckColor = "White" | "Brown" | "Black" | "Mixed";
  
  // Interface for a Duck's properties
  interface IDuck {
    name: string; // Name of the duck
    age: number; // Age of the duck in years
    type: DuckType; // Type of duck, using the DuckType enum
    color: DuckColor; // Color of the duck, using the DuckColor union type
    favoriteToy?: string; // Optional property: favorite toy of the duck
  }
  
  // Define an object for the developer, Elmer Code, using a Type
  type Developer = {
    name: string;
    favoriteDuckType: DuckType;
    skills: string[];
  };
  
  // Duck pond array to store multiple Duck objects
  const duckPond: PondDuck[] = []; // Explicit typing
  
  // PondDuck class that implements the Duck interface
  class PondDuck implements IDuck {
    name: string;
    age: number;
    type: DuckType;
    color: DuckColor;
    isFlying: boolean;
    favoriteFood?: string;
    favoriteToy?: string; // Optional property now explicitly declared in the class
  
    constructor(
        name: string,
        age: number,
        type: DuckType,
        color: DuckColor,
        favoriteFood?: string,
        favoriteToy?: string // Added favoriteToy as the last parameter
    ) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.color = color;
        this.isFlying = false;
        this.favoriteFood = favoriteFood;
  
        // --- Enforce favoriteToy requirement for Pekin ducks ---
        if (type === DuckType.Pekin && !favoriteToy) {
            // Log error if Pekin duck is created without a favoriteToy
            console.error(`Error: Pekin duck '${name}' must have a favorite toy.`); // Using console.error for emphasis
            // favoriteToy remains undefined for this instance
        } else {
            // Assign favoriteToy if provided, or if the duck is not a Pekin
            this.favoriteToy = favoriteToy;
        }
        // --- End enforcement ---
    }
  
    // Method to make the duck quack a certain number of times
    quack(times?: number): void {
        const quackCount = times || 1;
        for (let i = 0; i < quackCount; i++) {
            console.log(
                `${this.name} the ${this.color} ${this.type} duck says: Quack!`
            );
        }
        // Added a check to show the toy if it exists
        if (this.favoriteToy) {
            console.log(`   (Holding my ${this.favoriteToy})`);
        }
    }
  
    // Method to make the duck fly
    fly(): void {
        if (!this.isFlying) {
            this.isFlying = true;
            console.log(`${this.name} starts flying!`);
        } else {
            console.log(`${this.name} is already flying.`);
        }
    }
  
    // Method to make the duck land
    land(): void {
        if (this.isFlying) {
            this.isFlying = false;
            console.log(`${this.name} lands gracefully.`);
        } else {
            console.log(`${this.name} is already on the ground.`);
        }
    }
  
    // Swim method
    swim(): void {
        console.log(`${this.name} starts swimming!`);
    }
  
    /**
     * Filters the global duckPond array to find ducks of a specific color.
     * @param color The DuckColor to filter by.
     * @returns An array of PondDuck instances matching the specified color.
     */
    listDucksByColor(color: DuckColor): PondDuck[] {
        return duckPond.filter((duck) => duck.color === color);
    }
  
    /**
     * Simulates feeding the duck.
     * @param food The type of food being given to the duck.
     */
    feed(food: string): void {
        console.log(`Feeding ${this.name} with ${food}.`);
        if (this.favoriteFood && food.toLowerCase() === this.favoriteFood.toLowerCase()) {
            console.log(`${this.name} really loves ${food}!`);
        }
    }
  }
  
  
  // Create an instance of Elmer Code
  const elmer: Developer = {
    name: "Elmer Code",
    favoriteDuckType: DuckType.Mallard,
    skills: ["TypeScript", "Debugging", "Problem Solving", "Hunting Ducks!"],
  };
  
  // Example Usage:
  console.log(
    `Developer ${elmer.name} is obsessed with ${elmer.favoriteDuckType} ducks!`
  );
  
  
  // --- Create Duck Instances ---
  console.log("\n--- Creating Duck Instances ---");
  
  // Non-Pekin ducks (favoriteToy remains optional)
  const daffy = new PondDuck("Daffy", 3, DuckType.Mallard, "Black");
  const howard = new PondDuck("Howard", 2, DuckType.Muscovy, "Brown");
  const testDuck = new PondDuck('Test Duck', 2, DuckType.Muscovy, 'Brown');
  const mandy = new PondDuck("Mandy", 4, DuckType.Mandarin, "Mixed");
  
  // Pekin ducks (MUST have favoriteToy according to new rule)
  // Updated Donald and Daisy to include a favoriteToy argument
  const donald = new PondDuck("Donald", 5, DuckType.Pekin, "White", "Corn", "Sailor Hat"); // Added toy
  const daisy = new PondDuck("Daisy", 4, DuckType.Pekin, "White", undefined, "Mirror"); // Added toy (passed undefined for food)
  
  
  // --- Test Pekin favoriteToy requirement ---
  console.log("\n--- Testing Pekin favoriteToy Requirement ---");
  
  // Test Case 1: Pekin duck without a favorite toy (should log an error)
  console.log("Attempting to create Pekin duck 'Peter' without a toy...");
  const peter = new PondDuck("Peter", 1, DuckType.Pekin, "White"); // No toy provided
  // >> Expect console.error: "Error: Pekin duck 'Peter' must have a favorite toy."
  console.log(`Peter's info (toy should be undefined):`, { name: peter.name, type: peter.type, toy: peter.favoriteToy });
  
  
  // Test Case 2: Pekin duck with a favorite toy (should work fine)
  console.log("\nCreating Pekin duck 'Penny' with a toy:");
  const penny = new PondDuck("Penny", 2, DuckType.Pekin, "White", undefined, "Squeaky Ball"); // Toy provided
  // >> Expect NO error message
  console.log(`Penny's info (toy should be 'Squeaky Ball'):`, { name: penny.name, type: penny.type, toy: penny.favoriteToy });
  
  
  // Test Case 3: Non-Pekin duck without a toy (should work fine)
  console.log("\nCreating Mallard duck 'Molly' without a toy:");
  const molly = new PondDuck("Molly", 1, DuckType.Mallard, "Mixed"); // No toy needed or provided
  // >> Expect NO error message
  console.log(`Molly's info (toy should be undefined):`, { name: molly.name, type: molly.type, toy: molly.favoriteToy });
  
  // --- End Test ---
  
  
  // Adding ALL ducks (including test ones) to the pond array
  duckPond.push(daffy, howard, testDuck, mandy, donald, daisy, peter, penny, molly);
  
  
  // --- Remaining Function Calls and Examples ---
  
  // Function to make all ducks in the pond quack
  function makeAllDucksQuack(ducks: PondDuck[], times?: number): void {
    console.log("\n--- All Ducks Quacking ---");
    ducks.forEach((duck) => duck.quack(times));
  }
  
  // Function to make a specific duck fly based on its name
  function findDuckAndFly(name: string): void {
    const foundDuck = duckPond.find((duck) => duck.name === name);
    if (foundDuck) {
        foundDuck.fly();
    } else {
        console.log(`No duck named ${name} found in the pond.`);
    }
  }
  
  // Function to count the ducks by type using explicit typing
  function countDucksByType(type: DuckType ): number {
    return duckPond.filter((duck) => duck.type === type).length;
  }
  
  // Make all ducks in the pond quack 1 time (shows toy status)
  makeAllDucksQuack(duckPond, 1);
  
  // Make specific ducks fly
  findDuckAndFly("Donald");
  findDuckAndFly("Mandy");
  
  
  // Count the ducks by type
  console.log("\n--- Duck Counts by Type ---");
  const mallardCount: number = countDucksByType(DuckType.Mallard);
  console.log(`There are ${mallardCount} Mallard ducks in the pond.`);
  const mandarinCount: number = countDucksByType(DuckType.Mandarin);
  console.log(`There are ${mandarinCount} Mandarin ducks in the pond.`);
  const pekinCount: number = countDucksByType(DuckType.Pekin);
  console.log(`There are ${pekinCount} Pekin ducks in the pond.`); // Should include Donald, Daisy, Peter, Penny
  const muscovyCount: number = countDucksByType(DuckType.Muscovy);
  console.log(`There are ${muscovyCount} Muscovy ducks in the pond.`);
  
  
  // List all ducks currently in the pond
  console.log("\nDucks in the pond:", duckPond.map((duck) => duck.name).join(", "));
  
  
  // Swim tests
  mandy.swim();
  penny.swim();
  
  
  // Color listing tests
  console.log("\n--- Testing listDucksByColor ---");
  const whiteDucks = donald.listDucksByColor("White"); // Donald, Daisy, Peter, Penny
  console.log(`Found ${whiteDucks.length} white ducks:`, whiteDucks.map(duck => `${duck.name} (${duck.type})`));
  
  const mixedDucks = mandy.listDucksByColor("Mixed"); // Mandy, Molly
  console.log(`Found ${mixedDucks.length} mixed color ducks:`, mixedDucks.map(duck => `${duck.name} (${duck.type})`));
  
  
  // Feed tests
  console.log("\n--- Testing feed method ---");
  daffy.feed("pondweed");
  donald.feed("Corn"); // Should show favorite food message
  penny.feed("peas");
  peter.feed("lettuce"); // Peter exists, even without a toy
  
  
  // --- End Example Usage ---
  
  export { PondDuck, DuckType, duckPond, Developer, IDuck, DuckColor };
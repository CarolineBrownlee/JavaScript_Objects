// ***** IN CLASS LECTURE EXERCISES ***** //

// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

let car = {
    make: "Ford",
    year: "2015",
    model: "Mustang",
    color: "red"
}

console.table("car", car)

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animals = [
    {
        name: "Kippers",
        type: "dog",
        age: 7,
        breed: "Beagle"
    },
    {
        name: "Jack",
        type: "dog",
        age: 2,
        breed: "Golden Retriever"
    },
    {
        name: "Gypsy",
        type: "dog",
        age: 5,
        breed: "Great Dane"
    },
    {
        name: "Angus",
        type: "dog",
        age: 3,
        breed: "Mixed Breed"
    },
    {
        name: "Seymour Bouts",
        type: "cat",
        age: 4,
        breed: "Tabby"
    },
    {
        name: "Sharky",
        type: "cat",
        age: 8,
        breed: "Calico"
    }   
]
console.table("animals", animals) 

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.


   const Mom = {
        name: "Caroline",
        age: 41, 
        gender: "female"
    }
    
    const Jane = {
        name: "Jane",
        age: 15, 
        gender: "female"
    }

    const Annie = {
        name: "Annie",
        age: 13, 
        gender: "female"
    }
    
    const Molly = {
        name: "Molly",
        age: 9, 
        gender: "female"
    }

    const Joseph = {
        name: "Joseph",
        age: 2, 
        gender: "male"
    }


const familyMembers = [Mom, Jane, Annie, Molly, Joseph]
console.table("familyMembers", familyMembers);

document.querySelector(".title").innerHTML = "This is a test."

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log("Wardrobe", wardrobe);

// Lightning Exercise 4: Given the object above, output each of the values to the console using dot notation.

console.log(`Height: ${wardrobe.height}`);
console.log(`Manufacturer: ${wardrobe.manufacturer}`);
console.log(`Contents: ${wardrobe.contents}`);
console.log(`Depth: ${wardrobe.depth}`);
console.log(`Width: ${wardrobe.width}`);
console.log(wardrobe.contents[0], wardrobe.contents[1]);


const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
}

//*****/ ACCESSING KEYS IN OBJECTS /*****//

console.log("Dot Notation: ", lassie.breed)
console.log("Square Bracket Notation: ", lassie["breed"])

const keyToLookup = "breed"
console.log(lassie[keyToLookup])

// ***** ADDING KEY VALUE PAIRS TO AN OBJECT ***** //

lassie.favoriteToy = "Frisbee"
console.log("lassie with favorite toy: ", lassie);

lassie["favoriteFood"] = "Kibble"
console.log("lassie with favorite food: ", lassie);

// ***** BEGINNING OF PRACTICE EXERCISES ***** //

console.log("BEGINNING OF PRACTICE EXERCISES")

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log(`height: ${empireStateBuilding.height}`);
console.log(`east west length: ${empireStateBuilding.eastWestLength}`);
console.log(`square feet: ${empireStateBuilding.squareFeet}`);
console.log(`north south length: ${empireStateBuilding.northSouthLength}`);


// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

// "Square Bracket Notation: ", lassie["breed"]

console.log(empireStateBuilding["stories"]);
console.log(empireStateBuilding["address"]);
console.log(empireStateBuilding["constructionDate"]);
console.log(empireStateBuilding["cost"]);
console.log(empireStateBuilding["architect"]);

// Arrays as Values:

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// example from chapter:

// const boardedAnimals = kennel.currentAnimals

// for (let i = 0; i < boardedAnimals.length; i++) {
//     console.log(boardedAnimals[i])
// }

// > "Jet"
// > "Snickers"
// > "Blue"
// > "Jacks"
// > "Flap"
// > "Barnum"

const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

for (let i = 0; i < partTimeInstructors.length; i++) {
    console.log("part time instructor: ", partTimeInstructors[i])
}

 const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

 for (let i = 0; i < fullTimeInstructors.length; i++) {
     console.log("full time instructor: ", fullTimeInstructors[i])
 }

// Lightning Exercise 2: Output only Andy and Zoe in the console.

console.log(`Only Andy: ${nashvilleSoftwareSchool.instructors.fullTime[4]}`);
console.log(`Only Zoe: ${nashvilleSoftwareSchool.instructors.partTime[0]}`);



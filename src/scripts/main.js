

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

const familyMembers = [
    {
        name: "Caroline",
        age: 41, 
        gender: "female"
    },
    {
        name: "Jane",
        age: 15, 
        gender: "female"
    },
    {
        name: "Annie",
        age: 13, 
        gender: "female"
    },
    {
        name: "Molly",
        age: 9, 
        gender: "female"
    },
    {
        name: "Joseph",
        age: 2, 
        gender: "male"
    }
]
console.table("familyMembers", familyMembers);

document.querySelector(".title").innerHTML = "This is a test."

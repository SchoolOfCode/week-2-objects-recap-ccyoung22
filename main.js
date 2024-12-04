
console.log("JavaScript is linked successfully!");

const myHouse = {
    stories: 2,
    parking: null,
    bedrooms: 2,
    garden: true,
    energy_Efficiency_Rating : "D",

}

const myCar = {
    colour : "red",
    wheels : 4,
    steeringType : "power",
    seats : 2,
    milesToGallon : 20,

}

const myFavouriteFilm = {
    filmTitle : "The Dark Knight" ,
    releaseDate : 2008,
    leadActor : "Christian Bale"

}


let person = {
  name: "Ben",
  likesChocolate: false,
}

console.log(person.likesChocolate)

if (person.likesChocolate) {
    console.log("Ben loves chocolate"); } 
    else {
        console.log("Ben hates chocolate"); }


let desiredPleasantry = "farewell";

let bensPhrases = {
    greeting: "Well hello there!",
    farewell: "See you in another life, brother",
    smallTalk: "Warm today, isn't it...",
    };
        
 console.log(bensPhrases.smallTalk);

 console.log(bensPhrases[desiredPleasantry]);

 let me = {
    firstName: "Caitlin",
    lastName: "Young",
    isBootcamper: false,
  };

isBootcamper = true;

console.log(isBootcamper);

let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
};

let urgMessage = communication.payload.message;


if(communication.payload.message.priority === "URGENT"){
    console.log(urgMessage);} 
    else {
    console.log()}






   /* 👉 Using dot notation, read the text from the communication object and store it in a variable.

    👉 If the priority is urgent, then console.log the variable, else do nothing.*/
    


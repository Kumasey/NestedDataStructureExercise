//          QUESTION 1

// var nestedData = {
//     innerData: {
//       order: ["first", "second", "third"],
//       snacks: ["chips", "fruit", "crackers"],
//       numberData: {
//           primeNumbers: [2,3,5,7,11],
//           fibonnaci: [1,1,2,3,5,8,13]
//       },
//       addSnack: function(snack){
//           this.snacks.push(snack);
//           return this;
//       }
//     }
//   }
  
//Using a for loop, console.log all of the numbers in the primeNumbers array.

var nestedPrimeNumbers = nestedData.innerData.numberData.primeNumbers
for (var i = 0; i < nestedPrimeNumbers.length; i++){

console.log(nestedPrimeNumbers[i]);
}

// Using a for loop, console.log all of the even Fibonnaci numbers.

var fibonnaciArr = nestedData.innerData.numberData.fibonnaci

for (var i=0;i<fibonnaciArr.length;i++){

if(fibonnaciArr[i] % 2 ===0){
    
console.log(fibonnaciArr[i]);
    }
}

// Console.log the value "second" inside the order array.

console.log(nestedData.innerData.order[1]);

//	Invoke the addSnack function and add the snack "chocolate"

nestedData.innerData.addSnack("Chocolate");

// Inside of the addSnack function there is a special keyword called this. 
// What does the word this refer to inside the addSnack function?

// (Keyword 'THIS' in Java is a reference variable that refers to the current object. "this" is a reference to 
//the current object, whose method is being called upon.)

//                          QUESTION2


// var nestedObject = {
//     speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
//     data: {
//       continents: {
//         europe: {
//           countries: {
//             switzerland: {
//               capital: "Bern",
//               population: 8000000
//             }
//           }
//         }
//       },
//       languages: {
//         spanish: {
//             hello: "Hola"
//         },
//         french: {
//             hello: "Bonjour"
//         }
//       }
//     }
//   }
  
//	Write a function addSpeaker to add a speaker to the array of speakers. 
//The speaker you add must be an object with a key of name and a value of whatever you'd like

function addSpeaker(speakerName){
    nestedObject.speakers.push({
      name: speakerName
    })
  }

  addSpeaker('Kingsley')

// 	Write a function addLanguage that adds a language to the languages object.

  function addLanguage(language, helloInIgbo){
    nestedObject.data.languages[language] = {
      hello: helloInIgbo
    }
  }

  addLanguage('Igbo','elo');

// Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). 
// The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.


function addCountry(name, capital, population){
    nestedObject.data.continents.europe.countries[name] = {
      capital: capital,
      population: population
    }
  }

  addCountry('Denmark', 'Copenhagen', 1346000)

// 
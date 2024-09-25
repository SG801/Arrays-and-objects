//An array named songs with our top 5 favorite songs // done
//Log array length //done
//Test an array

const songs = [
  "Highway to Hell",
  "Nothing Else Matters",
  "Beat it",
  "Billie Jean",
  "Happy Birthday",
];

console.log(songs.length); //5
console.log(typeof songs); //object
console.log(Array.isArray(songs)); //true

// read an item in the array starting with second song 
console.log(songs[1]);

// read an item in the array for the most favourite song
console.log(songs[0]);

songs[4]='Baby Shark';
console.log(songs[4]);

// ticket 5
// copy the line from the Readme file 💚
// Create a For loop that starts with "0" and does not include the length 💚
// Multiply each value *10 + reassign the value
// log the array to the console 

let cookiesOrdered = [15, 3, 67, 1, 22, 100];
for (let i=0; i<cookiesOrdered.length; i++ ) {
  cookiesOrdered[i] = cookiesOrdered[i] * 10;
  console.log(`${cookiesOrdered[i]}`);
};

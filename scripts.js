var brunchFoods = [
  "Boring Breakfast Item",
  "Blueberry Pancakes",
  "Berry French Toast",
  "Bacon Breakfast Burrito",
  "Avocado Toast",
  "Four Cheese Omelette"
];

// 1. Access the first item in the brunchFoods array. 
console.log(brunchFoods[0]);


// 2. Replace the first item in the array with your favorite brunch food. 
brunchFoods[0] = 'Scrambled eggs with cheese';



// 3. Check the value of brunchFoods
console.log(brunchFoods);



// 4. Add (don't replace) a value to the brunchFoods array.
brunchFoods.push('Waffles');


// 5. Check the value of brunchFoods
console.log(brunchFoods);



// 6. Create a new variable named favoriteBrunchFood and set it equal to a string of your favorite brunch food (you can do this right underneath the brunchFoods array!). 
let favoriteBrunchFoods = 'Left over pizza';


// 7. Check the value of favoriteBrunchFood
console.log(favoriteBrunchFoods);


// 8. Write an if conditional that checks if the first item in the brunchFoods array is equal to the value of your favoriteBrunchFood. If we have a match, log "Yay, I'm having my favorite food for brunch!" If we do NOT have a match, log "I guess this brunch is fine.";
if (brunchFoods[0] === favoriteBrunchFoods) {
  console.log("Yay, I'm having my favorite food for brunch!");
} else {
  console.log("I guess this brunch is fine.");
}


// 9. Finish the function below that will REPLACE the first item in our brunchFoods array with whatever you pass into the function. Make sure to return the brunchFoods array to test that your code works as expected. 

function replaceFirstBrunchFood(food) {
  brunchFoods[0] = food;

  console.log(brunchFoods)
}

replaceFirstBrunchFood('Cookie Crisp');
replaceFirstBrunchFood('Lucky Charms');


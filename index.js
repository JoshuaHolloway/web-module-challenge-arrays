var originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"]

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array
 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/

const is31Flavors = (arr) => {
    const len = arr.length;
    const expected_num_flavors = 31;
    if (len == expected_num_flavors)    return true;
    else                                return false;
};

console.log('---------Question 1:---------');
console.log(is31Flavors(originalFlavors));
console.log('-----------------------------');

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */ 

console.log('---------Question 2:---------');
const addFlavor = ((new_flavor, arr) =>{
    arr.unshift(new_flavor);
    console.log(arr);
    console.log(`new array length: ${arr.length}`);
})("Rainbow Sherbert", originalFlavors);
console.log('-----------------------------');

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/ 

console.log('---------Question 3:---------');
const removeLastFlavor = ((arr) => {
    console.log(`Inside removedLastFlavor function:\nThe input array has length: ${arr.length}`);
    const popped = arr.pop();
    console.log('The array after popping off the last element is:');
    console.log(arr);
    console.log(`The popped off element is: ${popped}`);
    console.log(`The lenghth of the output array is ${arr.length}.\nNow leaving removeLastFlavor()`);
    return popped;
})(originalFlavors);
console.log('-----------------------------');

/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

const getFlavorByIndex = (arr, index) => arr[index];

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

const removeFlavorByName = (arr, value) => {
    
    // Get the index corresponding to the value:
    const index = arr.indexOf(value);
    console.log(`index = ${index}`);

    // Remove the element corresponding to index from the array:
    const num_elems_to_remove = 1;
    arr.splice(index, num_elems_to_remove);
    console.log(arr);
};
console.log('---------Question 5:---------');
removeFlavorByName(originalFlavors, "Strawberry");
console.log('-----------------------------');

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array.

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

function copy(new_arr, original_arr){

    // -Not positive that new_arr has the exact size we need.
    // -Lets just reset new_arr to make sure it is the right size:
    new_arr = new Array(original_arr.length);
    for (let i=0; i < original_arr.length; ++i)
        new_arr[i] = original_arr[i];
    return new_arr;
}

let new_array = [];
new_array = copy(new_array, originalFlavors);

console.log('---------Question 6:---------');
console.log(new_array);
console.log('-----------------------------');

/* Task 7: Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 
.

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function filterByWord(arr, word){

    let new_arr = [];
    // checks every item in the array for a given string
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(word))
            new_arr.push(arr[i]);
    }
    // returns a new array called filteredArray with just these values
    return new_arr;
}
// -For example, filterByWord(originalFlavors, "Chocolate") 
//  should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"]
console.log('---------Question 7:---------');
console.log(filterByWord(originalFlavors, "Vanilla"));
console.log('-----------------------------');



/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

*/

function getAverageWordLength(arr){
    // returns the average number of words in an array. 

    // create counter to count total number of chars
    let count = 0;

    // loop over all the flavors
    for (let i=0; i < arr.length; ++i) {
        // Break the 
        const broken = arr[i].split(' ');

        // Count number of words in each element
        const num_words = broken.length;

        // Add number of words to running counter
        count += num_words;
    }

    // Compute average by dividing total number of words by number of array elements
    const average_num_words = count / arr.length;
    return average_num_words;
}
// For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3.
console.log('*********Stretch-Question 1:*********');
console.log(getAverageWordLength(originalFlavors));
console.log('*************************************');


/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"] 
var seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango",]
var regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"]

function getRandomFlavors(/*code here*/){

    /*code here*/

}

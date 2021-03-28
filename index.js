/*REMEMBER TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/* 👀 This is your data ⬇ */
const originalFlavors = [
    "Banana Nut Fudge",
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
    "Vanilla Burnt Almond"
]

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Copy the Array! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
We have an array called originalFlavors with 31 flavors (see above).  In these tasks, we will be reading and writing data to this array.  
With all of these changes going on, we don't want to lose track of the actual, original 31 flavors.  So we need to copy the original array!

/*
Use the copy function below to do the following:
    1. receive an array as a parameter - you will pass in originalFlavors as an argument when the function is invoked.
    2. Return a copy of the received array  
*/

function copy(arr){
    return arr.map(x => x);
}    

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Confirm that an array is exactly 31 flavors. Your function should accept:
    1. an array as a parameter
    2. Check to see if the array given is 31 flavors
    3. Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.
  

For Example: is31Flavors(originalFlavors) will return true if your code is working properly
*/


function is31Flavors(arr){
    const len = arr.length;
    const expected_num_flavors = 31;
    if (len == expected_num_flavors)    return true;
    else                                return false;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Use the addFlavor function below to do the following:
    1. Receive an array
    2. Receive a new flavor as a string
    3. The function adds the passed flavor to the front of the passed array
    4. The function should return the resulting array

    For example: addFlavor(originalFlavors, "Rainbow Sherbert") should return the array ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"]
*/


function addFlavor(arr, new_flavor){
    arr.unshift(new_flavor);
    return arr;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Houston, we have a problem! There are now 32 flavors in the originalFlavors array! Your task is to remove an item from the end of the array. 

Use the removeLastFlavor function below to do the following:
    1. Receive an array
    2. Remove the last item from the received array
    3. Return the resulting array

    For example: running removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]
*/

function removeLastFlavor(arr){
    arr.pop();
    return arr;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function that returns a flavor at a given index in the array.

Use the getFlavorByIndex function below to do the following:
    1. Recieve an array
    2. Receive a number (the desired index)
    3. Return the flavor located at the received index position

    For example: running getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully
*/

const getFlavorByIndex = (arr, index) => arr[index];


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that single flavor from the array.  

Use the removeFlavorByName function below to do the following:
    1. Receive an array
    2. Receive a flavor as a string
    3. Remove the received flavor from the received array
    4. Return the resulting array that now contains one less flavor

    For example: running removeFlavorByName(originalFlavors, "Rocky Road") would return an array with the a length of 30 because Rocky Road would have been removed. 

    HINT: You can use .splice() for this
*/

const removeFlavorByName = (arr, value) => {
    
    // Get the index corresponding to the value:
    const index = arr.indexOf(value);
    console.log(`index = ${index}`);

    // Remove the element corresponding to index from the array:
    const num_elems_to_remove = 1;
    arr.splice(index, num_elems_to_remove);
    return arr;
};


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. 
Your task is to write a function that checks every item in the array for a string and returns a new array called filteredArray with only the values 
that contain the received string. This would allow you to be able to filter for "Vanilla", "Sherbet", "Lemon" etc. when different holidays roll around 
by passing in those specific strings.

Use the filterByWord function below to do the following:
    1. Receive an array
    2. Receive a string (example: "chocolate")
    3. Check to see if any of the flavors in the array contain that string
    4. If they do, add them to a new array
    5. Return the new array that contains the filtered flavors

    For example: filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond", "Chocolate Chip", "Chocolate Fudge", "Chocolate Mint", "Chocolate Ribbon"]

    HINT - you can use the .includes method to help you solve this

    DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem. 
*/

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


/* 💪💪💪💪💪🧁🍦🍨 STRETCH 🍨🍦🍫💪💪💪💪💪*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Use the getAverageWordLength function below to do the following:
    1. Receive the originalFlavors array
    2. Count how many words per item in the array
    3. Return the average number of words per item in the array

    For example: getAverageWordLength(originalFlavors) should return a number between 0 and 3.     
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


/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 2: 💪💪💪💪💪💪💪💪💪
Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors 
from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors and store it in an array called randomFlavors.

Use the getRandomFlavors function and new arrays below to do the following:
    1. Receive the four arrays with all the differnet flavors (originalFlavors is above, the others are below)
    2. Randomly pick flavors from all four arrays
    3. Return a new array called randomFlavors that has a lenght of 31

    For example: getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].
*/



function getRandomFlavors(orig_flavs, new_flavs, seas_flavs, reg_flavs){

    // Number of flavors
    const num_orig_flavs = orig_flavs.length;
    const num_new_flavs = new_flavs.length;
    const num_seas_flavs = seas_flavs.length;
    const num_rev_flavs = reg_flavs.length;
    const total_num_flavs = num_orig_flavs + num_new_flavs + num_seas_flavs + num_rev_flavs;

    // Combine all of the flavors into a single array for ease of random indexing
    const all_flavs = [...orig_flavs, ...new_flavs, ...seas_flavs, ...reg_flavs];

    // Create new array to store all randomly chosen flavors
    const randomly_chosen_flavs = [];

    // (31 corresponds to the total number of flavors we want to be on menu at one time)
    for (let i = 0; randomly_chosen_flavs.length < 31; i++) {

        // Randomly choose an index in range [0, total_num_flavs)
        const rand_num = Math.random(); // randomly chosen (from uniform distribution) in range: [0,1)
        const rand_index = Math.floor(rand_num * total_num_flavs); // [0, total_num_flavs)

        // Randomly choose a flavor
        const rand_flav = all_flavs[rand_index];  // randomly chosen flavor from all flavors

        // Ensure that random flav is not already chosen:
        if (randomly_chosen_flavs.includes(rand_flav))
            console.log('Flavor already on menu!');
        else 
            randomly_chosen_flavs.push(rand_flav);
    }

    return randomly_chosen_flavs;
}

// NEW DATA ARRAYS FOR STRETCH 2 ⬇️
const newFlavors = [
    "Date night",
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
    "Rainbow Swirl"
] 

const seasonalFlavors = [
    "America's Birthday Cake",
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
    "Mango Tango"
]

const regionalFlavors = [
    "Pink Bubblegum",
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
    "Caramel 'n' Cookies"
]



/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    is31Flavors,
    addFlavor,
    removeLastFlavor,
    getFlavorByIndex,
    removeFlavorByName,
    copy,
    filterByWord,
    getAverageWordLength,
    getRandomFlavors
}


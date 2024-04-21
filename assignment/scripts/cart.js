console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//Create a global variable named basket and set it to an empty array.
//Create a function called addItem. It should:
//take an input parameter for a string item
//add the new item to the global array basket.
//return true indicating the item was added


let basket = [];

// function addItem(item){
//         basket.push(item)
//     return true;
// }



// Create a function called listItems. It should:
// loop over the items in the basket array
// console.log each individual item on a new line


function listItems(){
 for (x of basket)
 console.log('list of items', x);
 
}

 

//  Create a function called empty. It should:
// reset the basket to an empty array
// do not use basket = [] to reset the array


function empty(){
    while (basket.length > 0){
            basket.pop();
    }
    
}


// Create a function called isFull(). It should:
// return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems)


const maxItems = 5;

function isFull(){
    if (maxItems > basket.length){
        return false
    }
    else 
     {
        return true;
    }
}


// Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false

function addItem(item){
        if (!isFull()){
            basket.push(item)
            return true;
        }

        else{
            return false;
        }

        
   }











try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}

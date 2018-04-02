// Math 1
// Write a function called zero_negativity(). 
// This function should take an array. 
// Return true if the input array contains no negative numbers, return false if it does.

// var newArr = [0, 2, -5, 7, 9, 10];

// function zero_negativity(arr)
// {
//     for(var num of arr)
//     {
//         if(num < 0){
//             console.log("false");
//             return false;
//         }
//     }
//     console.log("true");
//     return true;
// }

// zero_negativity(newArr);

// Math 2
// Write a function called is_even(). This function should take a number. 
// Return true if the input number is even, return false if the number is odd.

function is_even(num)
{
    if (num % 2 == 0)
    {
        // console.log("true");
        return true;
    }
    else
    {
        // console.log("false");
        return false;
    }
}

// is_even(4);

// Math 3
// Write a function called how_many_even(). This function should take an array. 
// Return the total number of elements in the array that are even. 
// You may call is_even() to solve this.
newArr = [2,3,6,8,9];

function how_many_even(arr)
{
    var count = 0;
    for(i = 0; i < arr.length; i++)
    {
        if (is_even(arr[i]) === true)
        {
             count += 1;
        }
    }
    console.log(count);
    return count;
}
how_many_even(newArr);

// Math 4
// Write a function called create_dummy_array(). 
// This function should take a number n. 
// Return an array of random numbers between 0 and 9 with the length of n.

// function create_dummy_array(n)
// {
//     var newArr = [];
//     var i = 0;
//     while(i < n)
//     {
//         let x = Math.floor(Math.random() * 10);
//         newArr.push(x);
//         i++
//     }
//     console.log(newArr);
//     return newArr;
// }

// create_dummy_array(4);

// Math 5
// Write a function called random_choice(). 
// This function should take an array. 
// Return a random element of the array, based on its length. 
// This function should never return undefined.

function random_choice(arr)
{
    let x = Math.floor(Math.random() * arr.length);
    console.log(x);
    console.log(arr[x]);
    return arr[x];
}
newArr = [3,4,7,9,2,4,7,5,8,3];
random_choice(newArr);
// Part I
// Create a function called starString() that takes a number and returns a string of that many *. For example:
// let stars = starString(8)

function starString(num)
{
    var stars = "";
    for(var i = 0; i < num; i++)
    {
        stars += "*";
    }
    console.log(stars);
}

// starString(5);

// Part II
// Create a function called drawStars() that takes an array of numbers and prints out *.

function drawStars(arr)
{
    for (var i = 0; i < arr.length; i++)
    {
        if(typeof(arr[i]) === "string")
        {
            var letter = ""
            for(var z = 0; z < arr[i].length; z++)
            {
                letter += arr[i][0].toLowerCase();
                
            }
            console.log(letter);  
        }
        else
        {
            starString(arr[i]);
        }
    }  
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars(x);



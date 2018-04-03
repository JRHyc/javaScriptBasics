let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (student of students)
{
    var string = "";
    for(key in student)
    {
        string += key + ": " + student[key]
        if(key == 'name')
        {
            string += ", "
        }
    }
    console.log(string);
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for (category in users)
 {
     console.log(category.toUpperCase())
     var count = 1;
     for(var user of users[category])
     {
         var string = count + " - ";
         string += user['last_name'].toUpperCase() + ", ";
         string += user['first_name'].toUpperCase() + " - ";
         var chars = user['first_name'].length + user['last_name'].length;
         string += chars;
         console.log(string);
         count ++;
     }
 }


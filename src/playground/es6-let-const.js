var nameVar='Harish';
var nameVar="Harish Kumar";
console.log('nameVar',nameVar);

var fullName='Harish Kumar';
function varTest()
{
    if(fullName)
    {
        var firstName=fullName.split(' ')[0];
        console.log(firstName);
    }
    console.log(firstName);
}
varTest();
//const and let are block scope

function letTest()
{
    let secondName;
    if(fullName)
    {
         secondName=fullName.split(' ')[1];
        console.log(secondName);
    }
    console.log(secondName);
}
letTest();

function constTest()
{
    if(fullName)
    {
        const secondName=fullName.split(' ')[1];
        console.log(secondName);
    }
    //console.log(secondName); 
}
constTest();
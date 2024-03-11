console.log("===== Step 1 =====");
function taluka()
{
    console.log("Sangola");
}
taluka();

function dist()
{
    console.log("Solapur");
}
dist();

console.log("===== Step 2 =====");
function personalDetails(firstName,lastName,collegeName)
{
    console.log("My First Name:Prashant");
    console.log("My Last Name:Yadav");
    console.log("My College Name:VMS");
}
personalDetails();

console.log("===== Step 3 =====");
function swapValue(virat,anushka)
{
    var virat = virat; 
    var anushka = anushka;
    console.log("======== Before Swap ==========");
    console.log("Virat:", virat, " Anushka:", anushka);
    
    console.log("======== After Swap ==========");
    var temp = virat;
    virat = anushka;
    anushka = temp;
    console.log("Virat:", virat, "Anushka:", anushka);
}
swapValue("Virat","Anushka");
swapValue(1000,2000);

console.log("******************************");
console.log("===== step 4 =====");

function add(n1, n2, n3){
    console.log("Arguments: ", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition is: ", result);
}
add(10.23,600,40)
add("Hello", "Good", "Morning")


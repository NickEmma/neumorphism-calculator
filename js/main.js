let outputScreen = document.getElementById("output-screen");
function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("invalid");
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
// this still works perfectly 
// function calculate(){
//     if(outputScreen.value == true){
//         outputScreen.value = eval(outputScreen.value);
//     }
//     else
//     {
//         // alert("invalid");
//         outputScreen.value = eval(outputScreen.value);
//     }
// }
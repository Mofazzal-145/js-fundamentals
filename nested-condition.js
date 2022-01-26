var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedWell = false;
// if(danishPrice < myBudget){
//     console.log("danish khabo");
// }
// else if (butterBreadPrice < myBudget){
//     console.log("butter Khabo");
// }
// else if(toastBiscuitPrice < myBudget){
//     console.log("toast biscuit khabo");
// }
// else{
//     console.log("khamu na ki korbi bol");
// }

if(danishPrice < myBudget){
    if(packedWell == true){
        console.log("danish khabo");
    }
    else{
        console.log("danish is unhealthy for health");
    }
}
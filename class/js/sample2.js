function getModifyData(){
    var myAge = document.getElementById('myage').value
    var marriage = (myAge<20)?'You are not eligible':"Your are eligible"
    console.log(marriage)
}
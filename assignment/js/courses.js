var result
function func1(){
    var course=document.getElementById('course1').value;
    if(course == 'java'){
        result='java course selected'
        document.getElementById('result').innerHTML= result
    }
    else if(course == 'dotnet'){
        result='dotnet course selected'
        document.getElementById('result').innerHTML= result
    }
    else{
        result = 'angular course selected'
        document.getElementById('result').innerHTML= result
    }
}
//  var grade = 'A'
// switch(grade){
//     case 'A': console.log('Distinction')
//     break;
//     case 'B': console.log('First Class')
//     break;
//     default: console.log('You are not passed')
// } 
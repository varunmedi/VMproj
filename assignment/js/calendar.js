
var day,result
function fun2(){
    day= (document.getElementById('text1').value)
    switch(day){
        case '1' :
            result= 'It is Monday'
            document.getElementById('result').innerHTML= result
            break;
        case '2' :
            result= 'It is Tuesday'
            document.getElementById('result').innerHTML= result
            break;
        case '3':
            result= 'It is Wednesday'
            document.getElementById('result').innerHTML= result
            break;
        case '4' :
            result= 'It is Thursday'
            document.getElementById('result').innerHTML= result
            break;
        case '5' :
            result= 'It is Friday'
            document.getElementById('result').innerHTML= result

            break;  
        case '6' :
            result= 'It is Saturday'
            document.getElementById('result').innerHTML= result
            break;  
        case '7' :
            result= 'It is Sunday'
            document.getElementById('result').innerHTML= result
            break;
        default:
            result='Invalid input'
            document.getElementById('result').innerHTML= result
            break;

    }


}
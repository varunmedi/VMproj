var a,b,result
function enter(){
    a=Number(document.getElementById('no1').value)
    b=Number(document.getElementById('no2').value)

}
function add(){
    enter()
    result = a+b
    document.getElementById('result').innerHTML= result
    
}
function sub(){
    enter()
    result = a-b
    document.getElementById('result').innerHTML= result

}
function mul(){
    enter()
    result = a*b
    document.getElementById('result').innerHTML= result
    
}
function div(){
    enter()
    result =a/b
    document.getElementById('result').innerHTML= result
}
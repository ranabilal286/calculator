function allClear(value){
    document.getElementById("result").value =""
}
function oneClear(){
    document.getElementById("result").value=result.value.slice(0, -1)
}
function getValue(value){
    document.getElementById("result").value +=value
    console.log(result)
}
function getResult(value){
    document.getElementById("result").value = eval(result.value)
}

function add() {
    var x = parseInt(document.getElementById("inp-1").value)
    var y = parseInt(document.getElementById("inp-2").value)
    let z = document.getElementById("hidden")
    x+=y
    z.textContent = "SUM : " + x
    console.log(z.innerHTML)
}

function sub(x, y) {
    var x = parseInt(document.getElementById("inp-1").value)
    var y = parseInt(document.getElementById("inp-2").value)
    let z = document.getElementById("hidden")
    x-=y
    z.textContent = "SUM : " + x
    console.log(z.innerHTML)
}
function mul(){
    var x = parseInt(document.getElementById("inp-1").value)
    var y = parseInt(document.getElementById("inp-2").value)
    let z = document.getElementById("hidden")
    x*=y
    z.textContent = "SUM : " + x
    console.log(z.innerHTML)
}

function div(){
    var x = parseInt(document.getElementById("inp-1").value)
    var y = parseInt(document.getElementById("inp-2").value)
    let z = document.getElementById("hidden")
    x/=y
    z.textContent = "SUM : " + x
    console.log(z.innerHTML)
}

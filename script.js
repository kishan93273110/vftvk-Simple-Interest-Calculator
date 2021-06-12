function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;

    if (p <= 0) {
        alert("Enter a positive Amount ")
        document.getElementById("principal").focus();
    } else {
        var interest = (p * r * y) / 100;
        document.getElementById("result").innerHTML = interest;
        document.getElementById("result").style.backgroundColor = "yellow";
    }
}

function changeVal() {
    var r = document.getElementById("rate").value;
    document.getElementById("val").innerHTML = r + "%";
}

let errorMessage = document.getElementById('errorMessage');

function outcome() {
    let x = Number(document.getElementById("num-one").value);
    let y = Number(document.getElementById("num-two").value);
    let z = 0;
    try {
        if (Number.isNaN(x) || Number.isNaN(y)) throw new Error('Only numbers, please');
        if (document.getElementById("box4").checked) {
            if (y != 0) {
                z = x / y;
            } else {
                throw new Error('Impossible to divide by 0');
            }
        }
        if (document.getElementById("box3").checked) {
            z = x * y;
        }
        if (document.getElementById("box2").checked) {
            z = x - y;
        }
        if (document.getElementById("box1").checked) {
            z = x + y;
        }
        document.getElementById("resultArea").innerHTML = " Result : " + z;
    } catch (error) {
        errorMessage.innerHTML = error;
        console.error('An error has occured:' + error);
    }
}


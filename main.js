document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("res");

    window.Clear = function () {
        display.value = "";
    };

    window.Back = function () {
        display.value = display.value.slice(0, -1);
    };

    window.Solve = function (value) {
        if (value === undefined) {
            try {
                display.value = eval(display.value.replace(/x/g, '*'));
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    };
});
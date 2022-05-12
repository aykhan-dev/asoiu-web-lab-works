document.querySelector("#submit").onclick = function() {
    let select = document.querySelector("#temperature");
    let inp = parseFloat(document.querySelector("#input").value);
    console.log(inp);
    let result;
    if (select.value === "c-to-f") {
	result = inp * 9 / 5 + 32;
    } else if (select.value === "f-to-c") {
	result = inp - 32 * 5 / 9;
    }
    document.querySelector("#result").textContent = result;
}

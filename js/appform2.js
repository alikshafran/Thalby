const form = document.forms["form"];

form.addEventListener ("input", inputHandler);

function inputHandler ({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg  = new RegExp(inputReg);
    console.log(inputValue);

    if (reg.test(inputValue)) {
        console.log ("YES");
        el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
        console.log ("NO")
        el.style.border = "2px solid rgb(255, 0, 0)";
    }
   
}


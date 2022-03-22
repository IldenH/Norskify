const changeStuff = {
    a: "å",
    A: "Å",
    c: "k",
    C: "K",
    e: "æ",
    E: "Æ",
    o: "ø",
    O: "Ø",
    q: "p",
    Q: "P",
    uu: "uu",
    u: "uu",
    UU: "UU",
    U: "UU",
    w: "v",
    W: "V",
    x: "ks",
    X: "KS",
    y: "i",
    Y: "I",
}

document.getElementById("button").addEventListener("click", Norskify);

function Norskify() {

    text = document.getElementById("textbox").value;

    // Norskify

    text = replaceAll(text, changeStuff);

    document.getElementById("textbox").value = text;
}

function replaceAll(text, changeStuff){
    var re = new RegExp(Object.keys(changeStuff).join("|"),"gi");

    return text.replace(re, function(matched){
        return changeStuff[matched];
    });
}
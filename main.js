let text = "";
const changeStuff = {
    a: "å",
    b: "b",
    c: "k",
    d: "d",
    e: "æ",
    f: "f",
    g: "g",
    h: "h",
    i: "i",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "n",
    o: "ø",
    p: "p",
    q: "p",
    r: "r",
    s: "s",
    t: "t",
    u: "uu",
    v: "v",
    w: "v",
    x: "ks",
    y: "i",
    z: "z"
}

function Norskify() {
    text = document.getElementById("textbox").value;

    // Norskify

    text = replaceAll(text, changeStuff)



    document.getElementById("textbox").value = text;
}

function replaceAll(text,changeStuff){
    var re = new RegExp(Object.keys(changeStuff).join("|"),"gi");

    return text.replace(re, function(matched){
        return changeStuff[matched.toLowerCase()];
    });
}
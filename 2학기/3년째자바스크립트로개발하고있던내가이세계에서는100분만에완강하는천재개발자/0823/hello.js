// var i = 0;

// function printNice() {
//     alert("Nice!")
//     fetch("https://example.com/")
// }

// alert("솔로루프!");

// printNice()

// for(i = 0; i < 10; i++) {
//     document.write("Hello World!")
//     document.write("<br>")
// }

function try1() {
    console.log("[TRY1 BEFORE]", a)
    const a = "cocoa"
    if(true) {
        console.log("[IF BEFORE]", a)
        a = "leaf"
        console.log("[IF AFTER]", a)
    }
    console.log("[TRY1 AFTER]", a)
}

console.log("1" * 3)

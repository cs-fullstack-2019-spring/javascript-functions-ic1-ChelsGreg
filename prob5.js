

function multiHello(name, multiple) {
    var counter = 0;
    while (counter < multiple) {
        console.log("Hello" + name);
        counter++;
    }

    for (var i = 0; i < multiple; i++) {
        console.log("Hello " + name)
    }
}


multiHello("Chelsea", 3);
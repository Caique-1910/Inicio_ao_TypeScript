//Exercício 7
let id = 10;

function formatarId(x: string | number): string {
    if (typeof x === "number") {
        return "ID:" + x.toString();
    }
    else {
        return "ID:" + x;
    }
}

console.log(formatarId(id));
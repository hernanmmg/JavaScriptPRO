function add(a: number, b: number) {
  return a + b;
}

let muted: boolean = true;
let people: string[] = [];
let peopleAndNumbers: Array<string | number> = [];

// enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Color = Color.Verde;
console.log(colorFavorito);
// return: 1 // "Verde"

let comodin: any = "Joker";

let someObject = { type: "wildcard" };

// funciones
function addd(a: number, b: number): number {
  return a + b;
}

function createAdder(a: number): (number) => number {
  return function(b: number) {
    return a + b;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// lastname? = undefined or string

function fullName(firstName: string, lastName: string = "Smith"): string {
  return `${firstName} ${lastName}`;
}
const richard = fullName("Hernan");

enum Colorr {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

// Interfaces
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Colorr;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);

rect.toString = function() {
  return `Rect: ${this.color}`;
};

// hasID
console.log("------ hasId------");
const objet1 = {
  id: 1,
  name: "Tamas Bedle",
  email: "tbedle0@sun.com",
  phone: "445-719-5651",
};

const hasID = (propertys) => propertys.hasOwnProperty("id");
console.log("¿El objeto tiene la propiead ID?: " + hasID(objet1));

// head
console.log("");
console.log("------ head ------");

const objet2 = ["manuel", "vicente", "luis", "rosa", "antonio"];
const head = ([firstElement]) => firstElement;
console.log("Array original:  " + objet2);
console.log("El primer elemento es: " + head(objet2));

// tail
console.log("");
console.log("------ tail: ------");

const tail = ([, ...restItem]) => restItem;
console.log("Array original:  " + objet2);
console.log("Array sin primer elemento: ");
console.log(tail(objet2));

// swapFirstToLast
console.log("");
console.log("------ swapFirstToLast ------");

const swapFirstToLast = ([primero, ...items]) => [...items, primero];
console.log("Array original:  " + objet2);
console.log("Array con primer elemento al final");
console.log(swapFirstToLast(objet2));

// excludeId
console.log("");
console.log("------ excludeId ------");

const excludeId = ({ id, ...rest }) => rest;
console.log("Objeto original:");
console.log(objet1);
console.log("Objeto sin propiedad ID:");
console.log(excludeId(objet1));

// wordsStartingWithA
console.log("");
console.log("------ wordsStartingWithA ------");
const words = ["ana", "maría", "rosa", "anabel", "Antonio", "ave", "coche", "taza"];
const wordsStartingWithA = (words) => words.filter(([firstWord]) => firstWord == "a" || firstWord === "A");
console.log("Objeto original:");
console.log(words);
console.log("Filtrado de palabras que empiezan por la letra 'A': ");
console.log(wordsStartingWithA(words));

// concat
console.log("");
console.log("------ concat ------");

const concat = (...datos) => datos.join(" | ");
console.log(concat("hola", "avión", "coche", "casa", "batidora"));

//multArray
console.log("");
console.log("------ multArray ------");

const arrayNums = [2, 5, 7, 8, 3];
const multArray = (nums, x) => nums.map((num) => num * x);
console.log("Array original: " + arrayNums);
console.log("Array donde cada valor se ha multiplicado por X: ");
console.log(multArray(arrayNums, 2));

//calcMult
console.log("");
console.log("------ calcMult ------");

const calcMult = (nums) => nums.reduce((acc, num) => acc + num, 0);
console.log("Array original: " + arrayNums);
console.log("Resultado de sumar todos los valores del array: ");
console.log(calcMult(arrayNums));

// EJERCICIO SEXTRAS
console.log("");
console.log("****** EJERCICIOS EXTRAS *******");

//swapFirstSecond
console.log("");
console.log("------ swapFirstSecond ------");

const swapFirstSecond = ([primero, segundo, ...rest]) => [segundo, primero, ...rest];
console.log("Array original:");
console.log(objet2);
console.log("Array modificado:");
console.log(swapFirstSecond(objet2));

//firstEqual
console.log("");
console.log("------ firstEqual ------");

const firstEqual = (char, ...strings) => strings.every(([firstChar]) => firstChar == char);

console.log(firstEqual("a", "ana", "anabel", "antonio", "ave"));

//longest
console.log("");
console.log("------ longest ------");

const arr1 = [4, 5, 6, 3, 6, 1];
const arr2 = [4, 5, 6, 3, 6, 1, 10, 24];
const arr3 = [4, 5, 6, 3];

const longest = (...arrays) => {
  let longerArray = 0;
  arrays.forEach((array) => {
    if (array.length > longerArray) longerArray = array.length;
  });
  return arrays.find((array) => array.length == longerArray);
};
console.log("El array más largo es: ");
console.log(longest(arr1, arr2, arr3));

// searchInStringV1
console.log("");
console.log("------ searchInStringV1 ------");

const searchInStringV1 = (char, string) => {
  console.log("Caracter a buscar: " + char);
  console.log("String:  " + string);
  return Array.from(string).reduce((sumchar, string) => {
    if (string == char) sumchar++;
    return sumchar;
  }, 0);
};

console.log(
  "Cantidad de veces que aparece el caracter buscado: " + searchInStringV1("t", "los tres tristes tigres comen trigo en un trigal")
);

// searchInStringV2
console.log("");
console.log("------ searchInStringV2 ------");

const searchInStringV2 = (char, string) => {
  let count = 0;
  console.log("Caracter a buscar: " + char);
  console.log("String:  " + string);
  Array.from(string).forEach((string) => {
    if (string == char) count++;
  });
  return count;
};

console.log("Cantidad de veces que se repite el caracter: " + searchInStringV2("a", "hola como estas"));

// sortCharacters
console.log("");
console.log("------ sortCharacters ------");

const sortCharacters = (string) => {
  console.log("String introducido: " + string);
  return Array.from(string).sort();
}
console.log(sortCharacters("manuel"));

// Lista de la compra
console.log("");
console.log("------ Lista de la compra ------");

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

const sortUnits = (products) => products.sort((a, b) => (a.units > b.units ? -1 : 1));

console.log(sortUnits(shoppingCart));

const subtotalCategory = (category, products) => {
  let subtotal = 0;
  products.reduce((acc, products) => {
    if (products.category == category) {
      acc += products.price;
      subtotal = subtotal + acc;
      console.log(products.product + " -> " + products.price);
    }
    return acc;
  }, 0);
  console.log("Subtotal de la categoria " + category + ": " + subtotal.toFixed(2));
};

subtotalCategory("Droguería", shoppingCart);

console.log("------------");

const totalMapPrice = (products) => {
  products.map((product) => {
    console.log(product.product + "-> Precio Total €: " + product.price * product.units);
  });
};

totalMapPrice(shoppingCart);

console.log("------------");
const sortShoppingCart = (productos) =>
  productos
    .sort((a, b) => {
      return a.category > b.category ? 1 : -1;
    })
    .map((product) => {
      console.log(product.product + "-> Precio Total €: " + product.price * product.units);
    });
sortShoppingCart(shoppingCart);

console.log("Hello, Hexlet!");

// По общепринятому соглашению, lodash импортируется под именем _
import _ from "lodash";

// Пересечение массивов
_.intersection([2, 1], [2, 3]); // => [2]

// capitalize делает первую букву заглавной
_.capitalize("hello"); // Hello

console.log(_.last(["one", "two"]));

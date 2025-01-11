// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.

type Developer = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

function getFirstPython(list: Developer[]): string {
  const foundDev = list.find((dev) => dev.language === "Python");
  if (foundDev) {
    return `${foundDev.firstName}, ${foundDev.country}`;
  }
  return "There will be no Python developers";
}

//test case
var list1 = [
  { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", age: 22, language: "JavaScript" },
  { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 30, language: "Python" },
  { firstName: "Emma", lastName: "B.", country: "Norway", continent: "Europe", age: 19, language: "Clojure" },
];

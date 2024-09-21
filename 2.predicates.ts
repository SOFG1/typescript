interface Person {
  name: string;
}

interface Developer {
  name: string;
  language: string;
}

//This function return whether person is Developer or not, also tells to TypeScript it
function isDeveloper(person: Person | Developer): person is Developer {
  return "language" in person;
}

function logPersonData(person: Person | Developer) {
  if (isDeveloper(person)) {
    console.log(`${person.name} ${person.language}`);
    return;
  }
  console.log(person.name);
}

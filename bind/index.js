

let person = {
    name: "Emma",
    lastname: "Bella",
    job: "Teacher",
    married: false,
    fullName:  function() {
        return `${this.name} want's ${this.lastname} to be her girlfriend..... I LOVE YOU TOO MUCH`;
    }
};

console.log(person.fullName());



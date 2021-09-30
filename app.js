// 1. Skapar ett objekt
// 2. ger den fyra key/value pairs
// 3. Gör tre metoder med valfritt kodflöde.
// 4. Visar upp det i consolen

const programmer = {
    firstname: "Prathusha",
    age: 32,
    isDeveloper: true,
    languages: ["Vue.js", " JavaScript", " Node.js", " React.js"],
    programmerSays: function() { 
        console.log('Hello to the world'); 
    },
    programmerNamn: function() {
        let surname = 'Pandipati';
        console.log('My name is' + ' ' + programmer.firstname + ' ' + surname + ' and i work with ' + programmer.languages); 
    },
    showDetails: function() {
        const position = this.isDeveloper ? 'is a Frontend developer' : ' is not a Frontend developer';

        console.log(`${this.firstname} ${position}.`);
    }
};

console.log(programmer);

programmer.programmerSays();
programmer.programmerNamn();
programmer.showDetails();





// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both


const person = {
    name:'ümit özdağ',
    age:25,
    status:'student',
    languages:['türkçe','almanca'],
    skills:{
        skill_one:'fire',
        skill_two:'ice',
        skill_three:'storm'
    }
}

// 
const keys = Object.keys(person);
console.log(keys);

// 
const values = Object.values(person);
console.log(values);

// 
const entries = Object.entries(person);
console.log(entries);

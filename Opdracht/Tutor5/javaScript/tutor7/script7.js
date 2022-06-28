console.log("hello")

//objects
let person = {
    naam: "John",
    leeftijd: 25,
    woonplaats: "Antwerpen" //dat is een object: naam, leeftijd en woonplats ZIJN DE keys; en values: John, 25, antwerpen
}

console.log(person)  //kunnen zien in console!
console.log(person.naam) // enkel naam weten in console!
console.log(person.leeftijd)

//2 verschillende manieren met text om tonen de gegevens met `` en +
console.log(`deze persoon heet ${person.naam} en woont in ${person.woonplaats}.`)
console.log("deze persoon heet " + person.naam + " en persoon woont in " + person.woonplaats)

let person2 = {
    naam: "Jack",
    leeftijd: 51,
    adres: {
        straat: "Reigersstraat",    // we geven een adres met straat en nummber object in object
        nummer: 5,
        woonplaats: "Brussel"
    }

}
console.log(person2.adres.straat)// in console zien we reigerstraat

//als e-mail willen toevoegen dan SPREAD OPERATOR gebruiken -bestaande object +nieuwe detail

person2 = { ...person2, email: "jja@mail.com" }
console.log(person2) // zien we alle gegevens met e-mail


//proberen in HTML onze persoon te tonen: in HTML in body schrijven code  zee: html bestand

document.querySelector("#data").innerHTML = person2.naam // in webpagina zien we JACK

//OOK KUNNEN WE EEN TABEL MAKEN IN HTML ZIE HTML BESTAND

document.querySelector("#tabel>tbody").innerHTML =
    `<tr><td style ="padding:20px; border:2px solid black">${person2.naam}</td>
<td>${person2.leeftijd}</td>
<td>${person2.adres.woonplaats}</td>
</tr>`

//Arrays

let arr1 = [1, 2, 3, 4, 5]
console.log(arr1)
console.log(arr1[3]) // in result zien we cijfer 4 het 3de element van array

let arr2 = ["Lies", "Jan", "Jos", "Carl"]
console.log(arr2[2])
console.log(arr2.length)
arr2[1] = "Piet" //veranderen de element ipv Jan Piet
console.log(arr2)

//elementen toevoegen aan array dan SPREAD Operator gebruiken:

arr2 = [...arr2, "Marc"]
console.log(arr2) //in result Marc is bijgezet

//Push methode
arr2.push("Marie")
console.log(arr2)  //ook Marie is bij

//objecten in array
/*let students = [
    {
        naam: "Jan",  //met{} objecten ingeven
        leeftijd: 22,
        woonplaats: "Mechelen"
    },
    {
        naam: "Piet",
        leeftijd: 44,
        woonplaats: "Oudergem"
    },
    {
        naam:"Pieter",
        leeftijd: 25,
        woonplaats: "Berchem"
    }
]
console.log(students)  //dus we hebben  een array van 3 studenten met hun objecten
console.log(students[1].naam) //we gaan Piet triggeren en we zien Piet enkel zijn naam
console.log(students.length)

//loop methodes
//for loop bestaat uit 3 stukjes:variable

for(let i = 0; i<students.length; i++){
    console.log(i)     //relsult: 0 1 2
  console.log(students[i].naam) //alle namen van studenten in result
    
  students[i].id = i  //als we  id willen toevoegen
  
  console.log(students)  //in console zien we:     id:0  id: 1 id:2 
}*/

let students = [                //nieuwe gegevens toevoegen E-MAIL
    {
        naam: "Jan",
        leeftijd: 22,
        email: "mail@mail.com",
        adres: {
            straat: "wetstraat",
            nummber: 22
        },
        woonplaats: "Mechelen"
    },

    {
        naam: "Piet",
        leeftijd: 44,
        email: "mail@mail.com",
        adres: {
            straat: "wetstraat",
            nummber: 22
        },
        woonplaats: "Oudergem"
    },

    {
        naam: "Pieter",
        leeftijd: 25,
        email: "mail@mail.com",
        adres: {
            straat: "wetstraat",
            nummber: 22
        },
        woonplaats: "Berchem"
    },
]

for (let x = 0; x < students.length; x++) {
    console.log(students[x].naam)  // we zien alle namen
    students[x].isStudent = true  // of student staat of niet in console zien we onze array isStudent true
}
console.log(students)  //alle studenten 

//map methode elk object mapt
students.map((student) => {  //student is parameter of object
    console.log(student) //we hebben elk object apart 
    /* bv:  Object
      adres: {straat: 'wetstraat', nummber: 22}
      email: "mail@mail.com"
      isStudent: true
      leeftijd: 22
      naam: "Jan"*/

    console.log(`student ${student.naam} is ${student.leeftijd} jaar.`)
}) //enkel de naam en leeftijd van student zien


//alle 3 arrays van studenten krijgen in onze tabel:

students.map((student) => {
    document.querySelector("#tabel>tbody").innerHTML += `<tr>
    <td>${student.naam}</td>
    <td>${student.leeftijd}</td>
    <td>${student.adres.woonplaats}</td>
    </tr>`

})

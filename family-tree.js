childOf = function () {return this.parents.map(parent => parent.name).join(' + ')}
age = function () {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const date = new Date().getDate()

    if (month> this.birthmonth && date > this.birthday){ return year - this.birthyear}
    else {return year - this.birthyear -1}
}


const me = {name: 'Martha', birthyear: 2002, birthmonth: 2, birthday: 17, parents:[], childOf, age}
const brother1 = {name: 'Noah', parents: [], childOf}
const brother2 = {name: 'Isaac', parents: [],childOf}
const parent1 = {name: "Therese", parents: [], childOf}
const parent2 = {name: 'Mark', parents:[], childOf}
const auntie = {name: 'Catherine', parents: [], childOf}
const grandparent1 = {name: 'Pat', parents: [], childOf}
const grandparent2 = {name: 'Jim', parents: [], childOf}
const grandparent3 = {name: 'Margret', parents: [], childOf}
const grandparent4 = {name: 'Eric', parents: [], childOf} 
const unknown = {name: 'Unknown', parents: [], childOf}

me.parents= [parent1, parent2]
brother1.parents= [parent1, parent2]
brother2.parents= [parent1, parent2]
parent1.parents= [grandparent1, grandparent2]
parent2.parents= [grandparent3, grandparent4]
auntie.parents= [grandparent3, grandparent4]
grandparent1.parents= [unknown, unknown]
grandparent2.parents= [unknown, unknown]
grandparent3.parents= [unknown, unknown]
grandparent4.parents= [unknown, unknown]
unknown.parents= [unknown, unknown]

module.exports = [me, brother1, brother2, parent1, parent2,auntie,grandparent1, grandparent2, grandparent3, grandparent4, unknown]

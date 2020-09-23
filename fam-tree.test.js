const familyTree = require('./family-tree.js')


describe('Family Tree', function() {
    test ('I am in my family tree', function () { 
    const me = familyTree[0] 
    expect(me.name).toEqual('Martha')
    })

    test ('My brothers are in my family tree', function () {
        const brother1 = familyTree[1]
        const brother2 = familyTree[2]
        expect(brother1.name).toEqual('Noah')
        expect(brother2.name).toEqual('Isaac')
    })

    test ('My parents are in my family tree', function () {
        const parent1 = familyTree[3]
        const parent2 = familyTree[4]
        expect(parent1.name).toEqual('Therese')
        expect(parent2.name).toEqual('Mark')
    })

    test ('My parents are Therese and Mark', function () {
        const me = familyTree[0]
        expect(me.childOf()).toBe('Therese + Mark')
    })

    test('My brothers parents are Therese and Mark', function () {
        const brother1 = familyTree[1]
        const brother2 = familyTree[2]
        expect(brother1.childOf()).toBe('Therese + Mark')
        expect(brother1.childOf()).toBe('Therese + Mark')
    })

    test('My auntie is in my family tree', function () {
        const auntie = familyTree[5]
        expect(auntie.name).toEqual('Catherine')
    })

    test('My grandparents are in my family Tree', function () {
        const grandparent1 = familyTree[6]
        const grandparent2 = familyTree[7]
        const grandparent3 = familyTree[8]
        const grandparent4 = familyTree[9]
        expect(grandparent1.name).toEqual('Pat')
        expect(grandparent2.name).toEqual('Jim')
        expect(grandparent3.name).toEqual('Margret')
        expect(grandparent4.name).toEqual('Eric')
    })

    test('My mums parents are Pat and Jim', function () {
        const parent1 = familyTree[3]
        expect(parent1.childOf()).toBe('Pat + Jim')
    })

    test('My dad and aunties parents are Margret and Eric', function () {
        const parent2 = familyTree[4]
        const auntie = familyTree[5]
        expect(parent2.childOf()).toBe('Margret + Eric')
        expect(auntie.childOf()).toBe('Margret + Eric')
    })

    test('My grandparents parents are unknown', function () {
        const grandparent1 = familyTree[6]
        const grandparent2 = familyTree[7]
        const grandparent3 = familyTree[8]
        const grandparent4 = familyTree[9]
        expect(grandparent1.childOf()).toBe('Unknown + Unknown')
        expect(grandparent2.childOf()).toBe('Unknown + Unknown')
        expect(grandparent3.childOf()).toBe('Unknown + Unknown')
        expect(grandparent4.childOf()).toBe('Unknown + Unknown')
    })

    test('unknowns parents are unknown', function () {
        const unknown = familyTree[10]
        expect(unknown.childOf()).toBe('Unknown + Unknown')
    })

    test('I am 18', function () {
        const me = familyTree[0]
        expect(me.age()).toBe(18)
    })
})






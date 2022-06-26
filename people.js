const ppl = ['binu','ishu','sonu'];
const age = [10,20,30];
console.log (ppl);
//module.exports = ppl;
//to export multiple values we use an object

module.exports = {
    people:ppl,
    ages: age
}
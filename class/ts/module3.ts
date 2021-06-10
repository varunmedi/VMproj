import {course,ages,student, getMessage} from './module1'
import {Calculator} from './module2'

console.log(course)
ages.push(40)
console.log(ages)
console.log(`Student Id: ${student.id} and Student name is ${student.fname}`)
console.log(getMessage('hi how are you?'))
let calc= new Calculator()
console.log(calc.addOperation(2,3))

///BONUS
// 1) rimozione dello studente  DONE
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due  DONE
// 4) aggiunta della data di nascita dello studente
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato

const student1 = new Student('Simone', 'Maccarone', '20-05-2003');
const student2 = new Student('Luis', 'Castro', "10-09-1993");
const student3 = new Student('Davide', 'Consigliere', "12-01-1989");
const student4 = new Student('Francesco', 'Badile', "05-09-1993");
const student5 = new Student('Daniele', 'Puggioni', "17-08-1999");
const student6 = new Student('Jing', 'Wang', "28-06-1993");
const student7 = new Student('Davide', 'Cresta', "13-10-2002");
const student8 = new Student('Valentina', 'Cherubini', "8-03-2001");
const student9 = new Student('Pietro', 'Viglino', "11-02-1989");
const student10 = new Student('Vlad', 'Ukraine', "11-12-1997");


const classroom1 = new ClassRoom([student1, student2, student3, student4,student5, student6, student7, student8,student9,student10]);


function displayClassroom(classroom) {
    document.getElementById('student-list').innerHTML = ''
    const classroomStudents = classroom.students
    for (let i = 0; i < classroomStudents.length; i++) {
        const element = classroomStudents[i];
        const studentList = document.getElementById('student-list')
        const newLi = document.createElement('li')
        const text = document.createTextNode((element.name) + ' ' + (element.surname)) //+ ' ' +(element.dob))
        const removeButton = document.createElement('button')
        removeButton.setAttribute("id", "removeButton")
        const buttonText = document.createTextNode('')
        removeButton.appendChild(buttonText)
        removeButton.addEventListener('click', (event) => classroom1.removeStudent(element))
        newLi.appendChild(text)
        newLi.appendChild(removeButton)
        studentList.appendChild(newLi)
       

    }
}

displayClassroom(classroom1)


// function highlightIfBirthday() {
//     const studentName = document.getElementById('student-list')
//     if (this.dob === currentDate) {
//         const hightlight = document.createElement('strong')
//         studentName.appendChild(studentName)
//     } return studentName
// }
function shuffleTheClassroom() {
    classroom1.shuffleStudents();
    displayClassroom(classroom1)

}

function addStudentToClassroom() {
    const inputName = document.getElementById('student-name')
    const inputSurname = document.getElementById('student-surname')
    if (inputName.value !== '' && inputSurname.value !== '') {
        const newStudent = new Student(inputName.value, inputSurname.value)
        classroom1.addStudent(newStudent)
        displayClassroom(classroom1)
        inputName.value = ''
        inputSurname.value = ''
    }
}



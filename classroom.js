class ClassRoom {

    constructor(students = []) {
        this.students = students;
    }

    addStudent(student) {
        this.students.push(student)
    }

    removeStudent(student) {
        const studentIndex = this.students.indexOf(student)
        this.students.splice(studentIndex, 1)
        displayClassroom(classroom1)

    }

    shuffleStudents() {
        this.students.sort((a, b) => 0.5 - Math.random());
    }


}

// for (let i = this.students.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = this.students[i];
//     this.students[i] = this.students[j];
//     this.students[j] = temp;

// }

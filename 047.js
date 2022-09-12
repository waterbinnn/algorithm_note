const people = {
    이호준: '01050442903',
    이호상: '01051442904',
    이준호: '01050342904',
    이호준: '01050442903',
    이준: '01050412904',
    이호: '01050443904',
    이호준: '01050442903',
};

function answer() {
    const student = new Set();
    for (let key in people) {
        student.add(people[key]);
    }
    console.log(student);
    console.log(student.size);
}

answer();

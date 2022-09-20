const students = [
    '강은지',
    '김유정',
    '박현서',
    '최성훈',
    '홍유진',
    '박지호',
    '권윤일',
    '김채리',
    '한지호',
    '김진이',
    '김민호',
    '강채연',
];

let result = students.sort();
for (let i in students) {
    let num = parseInt(i, 10) + 1;
    console.log(`번호: ${num}, 이름: ${result[i]}`);
}

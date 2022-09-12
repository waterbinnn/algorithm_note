function answer(a, b) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const x = new Date('2020-' + a + '-' + b);
    console.log(day[x.getDay()]);
}

answer(10, 6);

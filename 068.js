function answer(timeArr, time) {
    let result = [];
    time = time.split(':').map((n) => parseInt(n, 10));
    time = time[0] * 60 + time[1];

    for (let i in timeArr) {
        let t = timeArr[i].split(':').map((n) => parseInt(n, 10));
        t = t[0] * 60 + t[1];

        if (t < time) {
            result.push('지나갔습니다');
        } else {
            let hr = parseInt((t - time) / 60, 10);
            let min = (t - time) % 60;
            console.log(String(min).padStart(2, 0));
            result.push(String(hr).padStart(2, 0) + '시간' + String(min).padStart(2, 0) + '분');
        }
    }
    return result;
}

console.log(answer(['12:30', '13:20', '14:13'], '12:40'));

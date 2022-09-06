function answer(str) {
    const strLeng = str.split('');
    for (let i = 0; i < strLeng.length - 1; i++) {
        const result = strLeng[i] + strLeng[i + 1];
        console.log(result);
    }
}

answer('Javascript');

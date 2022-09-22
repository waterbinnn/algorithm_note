const blocks = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
const rule = 'ABCD';

function solution(blocks, rule) {
    let answer = [];
    for (let block of blocks) {
        answer.push(checkBlock(block, rule));
    }
    return answer;
}

function checkBlock(block, rule) {
    let t = rule.indexOf(rule[0]); //임시변수

    for (let s of block) {
        if (rule.includes(s)) {
            if (t > rule.indexOf(s)) {
                return '불가능';
            }
            t = rule.indexOf(s);
        }
    }
    return '가능';
}

console.log(solution(blocks, rule));

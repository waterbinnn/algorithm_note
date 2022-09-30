// 최장경로찾기 - 너비우선탐색

const graph = {
    1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6],
};

const user_input = [1, 7];
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);

let queue = [start];
let visited = []; // 방문한 노드의 수 누적

function sol(n, visited) {
    //n의 가장 마지막에 있는 요소가 노드에 들어가게 되는 것
    let node = n[n.length - 1];
    let length = 0;

    if (node == end) {
        return visited.length;
    }

    if (visited.includes(node)) {
        return visited.length;
    } else {
        visited.push(node);
    }
    let max = [];

    for (let next_node in graph[node]) {
        n.push(graph[node][next_node]);

        max.push(length, sol(n, visited));
        length = Math.max.apply(null, max);

        queue.pop();
    }
    return length;
}
console.log(sol(queue, visited));

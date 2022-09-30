//최단경로 탐색 
//BFS 너비우선탐색 - Queue
/**
 * Queue | visited 방문경로 | Current
 * visited 에 A 가 들어오면 그 아래있는 B , C 가 Queue 에 쌓인다 
 * visited 에 B 가 들어오면 그 아래있는 D , E 가 Queue 에 쌓인다 
 * 
 */


const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

const user_input = ['A', 'F'];
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [start];

function solution() {
    let count = -1; //어느 넓이에 있는지에 대한 카운트 , 들언는 순간 +1할거라서 -1로 시작 (바로 0이 되게)

    while (queue.length !== 0) {
        count += 1;

        let size = queue.length; 

        for (let i = 0; i < size; i++) {
            let node = queue.splice(0, 1); //항상 0번째 노드를 뽑기위해
            if (node == end) { 
                return count;
            }

            for (let next_node in graph[node]) {
                if (!visited.includes(graph[node][next_node])) {
                    //노드가 추가되어있지 않다면 push 
                    visited.push(graph[node][next_node]);
                    queue.push(graph[node][next_node]);
                }
            }
        }
    }
}
console.log(solution());

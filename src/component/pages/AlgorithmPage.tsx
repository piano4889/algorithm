import React from 'react';

const AlgorithmPage = () => {

    const question1 = (my_string: string, index_list: Array<number>) => {
        let answer = '';

        for (const x of index_list) {
            let a = my_string.charAt(x);
            answer += a;
        }
        console.log("answer1 :", answer);

        let answer2 = index_list.map((index) => my_string.charAt(index)).join('');
        console.log("answer2 : ", answer2);
    }
    const question2 = (number: string) => {
        let answer = 0;

        number.split("").map(Number)
            .forEach(x => {
                answer += x;
            });

        return answer %= 9;

    }
    const question3 = (my_string: string, queries: number[][]) => {
        let answer = my_string.split('');

        for (const [start, end] of queries) {
            const reversed = answer.slice(start, end + 1) // slice(start 부터, end) 이전까지 자르기에, + 1
                .reverse(); // 범위 내의 요소를 뒤집은 배열 생성

            answer.splice(start, reversed.length, ...reversed);
            //splice : 추가하거나 제거하는 기능
            //첫번째 인자 : 배열에서 변경을 시작할 인덱스
            //두번째 인자 : 첫번쨰 인자에서 부터 제거할 요소의 개수 지정
            //세번째 인자 : 필요에 따라 배열에 삽입할 요소 지정
        }
        return answer.join('');
    };
    const question4 = (intStrs: string[], k: number, s: number, l: number) => {
        let answer = [];
        for (const intStr of intStrs) {
            let int = Number(intStr.slice(s, s + l));
            if (int > k) {
                answer.push(int);
            }
        }

        return answer;
    }
    const question5 = (my_strings: string[], parts: number[][]) => {
        let answer = '';

        for (let i = 0; i < my_strings.length; i++) {
            const [start, end] = parts[i];
            answer += my_strings[i].slice(start, end + 1);
        }

        parts.map(([start, end], i) => {
            return my_strings[i].slice(start, end + 1);
        }).join('');

        return answer;
    }
    const question6 = (my_string: string, n: number) => {
        let answer = '';

        let strings = my_string.split('').reverse().slice(0, n);

        strings.reverse().forEach(string => {
            answer += string;
        });

        console.log(my_string.substring(my_string.length - n));

        return answer;


    };
    const question7 = (my_string: string) => {
        let answer: string[] = [];

        for (let i = 0; i < my_string.length; i++) {
            answer.push(my_string.substring(i));
        }

        let sort = answer.sort((a, b) => (a.localeCompare(b)));

        console.log(sort)
    };
    const question8 = (genres: string[], plays: number[]) => {
        let genrePlays = genres.reduce((acc: any, genre, i) => {
            acc[genre] = (acc[genre] || 0) + plays[i];
            return acc;
        }, {});

        console.log(genrePlays);
        let sortedGenres = Object.keys(genrePlays).sort((a, b) => genrePlays[b] - genrePlays[a]);
        return sortedGenres.flatMap(genre => {
            return plays
                .map((play, i) => [i, play])
                .filter(song => genres[song[0]] === genre)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 2)
                .map(song => song[0]);
        });
    }
    const question9 = (array: number[], commands: number[][]) => {
        let answer = [];
        for (const [i, j, k] of commands) {
            let sortedArray = array.slice(i - 1, j)
                .sort((a, b) => a - b);
            answer.push(sortedArray[k - 1]);
        }

        return answer;
    }
    const question10 = (numbers: number[]) => {
        let sort = numbers.sort((a, b) => {
            const num1: any = a.toString() + b.toString();
            const num2: any = b.toString() + a.toString();
            return num2 - num1;
        });

        return sort[0].toString() === '0' ? '0' : sort.join('');

    }
    const question11 = (citations: number[]) => {

        let answer = 0;
        const sortedNumbers = citations.sort((a, b) => b - a);

        for (const number of sortedNumbers) {
            if (answer < number) {
                console.log("number::", number);
                answer++;
            }
        }

        console.log("h_index: ", answer);

    }
    const question12 = (numbers: number[], target: number) => {
        let answer = 0;

        const dfs = (index: number, sum: number) => {
            if (index === numbers.length) {
                if (sum === target) {
                    answer++;
                }
                return;
            }
            dfs(index + 1, sum + numbers[index]);
            dfs(index + 1, sum - numbers[index]);
        }
        dfs(0, 0);

        return answer;
    }
    const question13 = (n: number, computers: number[][]) => {
        let answer = 0;
        let visited = Array(n).fill(false); //초기값 설정

        const dfs = (node: number) => { //dfs 방식(재귀함수)
            visited[node] = true;
            for (let i = 0; i < n; i++) {
                if (computers[node][i] === 1 && !visited[i]) {
                    dfs(i);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i);
                answer++;
            }
        }

        console.log(answer);
        return answer
    }
    /*  const question14 = (maps: number[][]) => {
          const n = maps.length;
          const m = maps[0].length;
          const dx = [-1, 1, 0, 0];
          const dy = [0, 0, -1, 1];
          const visited = Array.from({length: n}, () => Array(m).fill(false)); // n * m

          const dfs = (row: number, col: number, dist: number) => {

              if (row === n - 1 && col === m - 1) {
                  //상대 진영에 도착한 경우
                  minDist = Math.min(minDist, dist);
                  return;
              }

              for (let i = 0; i < 4; i++) {
                  const newRow = row + dx[i];
                  const newCol = col + dy[i];

                  // 다음 위치가 유효하고, 벽이 아니며, 방문하지 않은 곳인 경우 탐색 진행
                  if (newRow >= 0
                      && newRow < n
                      && newCol >= 0
                      && newCol < m
                      && maps[newRow][newCol] === 1
                      && !visited[newRow][newCol]) {
                      visited[newRow][newCol] = true;
                      dfs(newRow, newCol, dist + 1);
                      visited[newRow][newCol] = false;
                  }
              }
          }
          let minDist = Infinity;
          visited[0][0] = true;
          dfs(0, 0, 1);

          return minDist === Infinity ? -1 : minDist;
      }*/
    const question14 = (maps: number[][]) => {
        const yLen = maps.length;
        const xLen = maps[0].length;
        const goalY = yLen - 1;
        const goalX = xLen - 1;
        const dy = [0, 0, 1, -1];
        const dx = [-1, 1, 0, 0];

        const queue = [];
        queue.push([0, 0, 1]);

        while(queue.length) {
            const [curY, curX, move]:any = queue.shift()!;
            if(curY === goalY && curX === goalX) return move;

            for(let i = 0; i < 4; i++) {
                const ny = curY + dy[i];
                const nx = curX + dx[i];
                if(ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
                    queue.push([ny, nx, move + 1]);
                    maps[ny][nx] = 0;
                }
            }
        }

        return -1;
    }
    return (
        <div>
            <ul>
                <li
                    onClick={() => question1("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])}>문제 1
                </li>
                <li onClick={() => question2('78720646226947352489')}>문제 2</li>
                <li onClick={() => question3("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]])}>문제 3</li>
                <li onClick={() => question4(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)}>문제 4</li>
                <li onClick={() => question5(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]])}>문제
                    5
                </li>
                <li onClick={() => question6('ProgrammerS123', 11)}>문제 6</li>
                <li onClick={() => question7('banana')}>문제 7</li>
                <li onClick={() => question8(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])}>문제
                    8
                </li>
                <li onClick={() => question9([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])}>문제 9</li>
                <li onClick={() => question10([6, 10, 2])}>문제 10</li>
                <li onClick={() => question11([3, 0, 6, 1, 5])}>문제 11</li>
                <li onClick={() => question12([1, 1, 1, 1, 1], 3)}>문제 12</li>
                <li onClick={() => question13(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])}>문제 13</li>
                <li onClick={() => question14([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]])}>
                    문제 14
                </li>
            </ul>
        </div>
    );
};

export default AlgorithmPage;
import React from 'react';

const AlgorithmPage2 = () => {

    const question1 = (my_string: string) => {
        //1. ASKII로 접근
        const result = my_string.split('').reduce((acc: any, char) => {
            if ('A' <= char && char <= 'Z') {
                acc[char.charCodeAt(0) - 'A'.charCodeAt(0)]++; // 대문자 처리
                /*
                    char.charCodeAt(0) = `char`의 유니코드 값 반환
                    대문자 `A` 유니 코드 값을 빼서 0부터 25까지의 인덱스로 매핑
                */
            } else if ('a' <= char && char <= 'z') {
                acc[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++; // 소문자 처리
            }
            return acc;
        }, Array(52).fill(0)); //배열의 초기값);

        console.log(result);
    }
    const question2 = (n: number, k: number) => {
        // const answer = [];
        // for (let i = 1; i <= n; i++) {
        //     if(i % k === 0 ){
        //         answer.push(i);
        //     }
        // }
        // return answer.sort((a, b) => a - b);
        return [...Array(n)].map((_, i) => i + 1)
            .filter(i => i % k === 0)
            .sort((a, b) => a - b);
    }
    const question3 = (my_string: string, indices: number[]) => {
        const arr = my_string.split('')
            .filter((_, i) => !indices.includes(i))
            .join('');
    }
    const question4 = (start: number, end_num: number) => {
        const arr = [...Array((start - end_num) + 1)].map((_, i) => start - i);
        console.log(arr);
    }
    const question5 = (arr: number[], idx: number) => {
        let answer = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1 && idx <= i) {
                answer = i;
                break; // 가장 작은 인덱스를 찾았으면 더 이상 검사할 필요가 없음
            }
        }

        console.log(answer);

        return answer;

    }
    return (
        <ul>
            <li onClick={() => question1("Programmers")}>문제1</li>
            <li onClick={() => question2(10, 3)}>문제2</li>
            <li onClick={() => question3("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])}>문제3</li>
            <li onClick={() => question4(10, 3)}>문제4</li>
            <li onClick={() => question5([1, 1, 1, 1, 0]	, 3)}>문제5</li>
        </ul>
    );
};

export default AlgorithmPage2;
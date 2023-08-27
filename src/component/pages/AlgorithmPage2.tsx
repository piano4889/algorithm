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

    return (
        <ul>
            <li onClick={() => question1("Programmers")}>문제1</li>
        </ul>
    );
};

export default AlgorithmPage2;
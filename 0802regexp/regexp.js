// let str1 = "I love Apple pie and apple juice";
// let pattern = /\b/;
// let pattern2 = /e\b/g;
// let result = str1.match(pattern); //replace
// let result2 = str1.replace(pattern2, "_");

// let text = "";
// text += result + "<br>";
// text += result2 + "<br>";
// document.getElementById("show").innerHTML = text;

// 문제1 apple 단어 포함 여부 확인
"I love APple pie and apple juice.";
const target = "I love apple pie and apple juice";
const regExp = /apple/;
regExp.test(target);
console.log(target.match(regExp));

// 문제 2 모든 대문자 찾기
// "Hello World! This is a Test String."
// const target = "Hello world! This is a Test string";
// const regExp = /[A-Z]+/g;
// console.log(target.match(regExp));

// 문제3 "1 10 100 2000 30000"
// 결과: 100,200,300 이 나오도록 정규식으로 작성

// 문제 4
// How do you do의 결과가 o.d.o.o.d.o가 나오도록 정규식 작성

// 문제5
// 89139012349
// 9,9,0,9가 실행되도록 정규식 작성

// 문제6
// A AA B BB Aa Bb AAA
// A가 최소 1번 최대 2번 반복되는 문자열을 검색

// 문제 7
// AA BB 12 345
// 0 ~ 9가 한번 이상 반복되는 문자열 검색

// 문제
// 객체 peoson을 만들고 name과 age를 구조 분해 할당하여 변수 userName과 userAge에 각각 저장한 후
// 두 변수를 활용하여 아래와 같은 형식의 문자열을 출력하는 코드를 작성
// console.log(`이름:${userName}, 나이${userAge}`)

const person = { name: "lee", age: 16 };
const { name: userName, age: userAge } = person;
console.log(`이름:${userName}, 나이${userAge}`);

// 보고 품...

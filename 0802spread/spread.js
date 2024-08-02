// 스프레드 문법
// • 전개 문법으로 …은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서(전개, 분산하여, spread) 개별적인 값들의 목록
// 으로 만든다.
// • 스프레드 문법을 사용할 수 있는 대상 ­ Array, String, Map, Set, Dom 컬렉션과 같이 for… of문으로 순회할
// 수 있는 이터러블에 한정된다.
// • > console.log (…[1, 2, 3]);
// • > console.log(…Hello);
// • > console.log(… new Map([[’a’, ‘1’],[‘b’, ‘2’]]));
// • > console.log(…new Set([1, 2, 3]));
// • >console.log(…{a: 1, b: 2}); //일반 객체는 이터러블이 아니다.

// 스프레드 문법
// • Rest 파라미터 VS 스프레드 문법
// Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받기 위해 매개변수 이름 앞에 …을 붙이는 것
// 스프레드 문법은 여러 개의 값이 하나로 뭉쳐 있는 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만드는 것

// function foo(...rest) {
//   // 인수들의 목록을 배열로 받는다.
//   console.log(rest);
// }
// foo(...[1, 2, 3]);
//개별적인 값들의 목록을 만든다

// • 배열 리터럴 내부에서 사용하는 경우
// • 배열 리터럴에서 사용하면 기존의 방식보다 더욱 간결하고 가독성 좋게 표현 가능
// let arr3 = [1, 4];
// let arr4 = [2, 3];
// arr3.splice(1, 0, arr4);
// console.log(arr3);

// arr3.splice(1, 0, ...arr4);
// console.log(arr3);

// 스프레드 문법
// • 배열 복사
// • 배열을 복사하려면 slice() 메서드를 사용한다.
// • 원본 배열의 각 요소를 얕은 복사하여 새로운 복사본을 생성한다.
// const origin = [1, 2];
// const copy = origin.slice();
// console.log(copy);
// console.log(copy === origin);
// const origin = [1, 2];
// const copy = [...origin];
// console.log(copy);
// console.log(copy === origin);

// 스프레드 문법
// • 이터러블을 배열로 변환
// • 스프레드 문법을 사용하면 좀 더 간편하게 배열로 변환 가능.
// • arguments 객체는 이터러블이면서 유사배열 객체이다.
// 요즘 거의 잘 안씀

// 스프레드 문법
// • 객체 리터럴 내부에서 사용하는 경우
// • 스프레드 프로퍼티를 사용하면 객체 리터럴의 프로퍼티 목록에서도 스프레드 문법을 사용할 수 있다.
// • 다른 객체의 속성을 쉽게 복사하거나 병합할 수 있다.
// const obj = { x: 1, y: 2 };
// const copy = { ...obj };
// console.log(copy);
// console.log(obj === copy);
// const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
// console.log(merged);

// 스프레드 문법
// • 객체 리터럴 내부에서 사용하는 경우
// • Object.assign() 여러 개의 객체를 병합하거나 특정 프로퍼티를 변경 또는 추가한다.
// const merged = Object.assign({}, { x: 1, y: 2 }, { y: 3, x: 3 });
// console.log(merged);
// const merged = { ...{ x: 1, y: 2 }, ...{ y: 3, x: 3 } };
// console.log(merged);

// 디스트럭처링 할당 (구조 분해 할당)
// • 구조화된 배열과 같은 이터러블 또는 객체를 (비구조화, 구조파괴) 하여 1개 이상의 변수에 개별적으로 할당하는 것
// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);
// // 할당 연산자 왼쪽에 값을 할당받을 변수를 선언해야 한다.
// const [a, b] = [1, 2];
// console.log(a, b);

// const [c, d] = [1];
// console.log(c, d);
// 배열 디스턱처링 할당의 기준은 배열의 인덱스다.

// 디스트럭처링 할당 (구조 분해 할당)
// • 객체 디스트럭처링 할당
// • ES5 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야 한다.
// • ES6 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다.
// const user = { firstName: "kim", lastName: "Lee" };
// const { lastName, firstName } = user;
// console.log(lastName, firstName);

// 디스트럭처링 할당 (구조 분해 할당)
// • 객체 디스트럭처링 할당
// • 객체를 인수로 전달받는 함수의 매개변수에 사용
function printTodo({ content, completed }) {
  console.log(`할일 ${content}는 ${completed ? "완료" : "비완료"} 상태입니다.`);
}
printTodo({ id: 1, content: "HTML", completed: true });

// 디스트럭처링 할당 (구조 분해 할당)
// • 객체 디스트럭처링 할당
// • 중첩 객체의 경우에는 프로퍼티 키로 객체를 추출하고, 이 객체의 프로퍼티 키로 값을 추출한다
const user = {
  name: "Lee",
  address: {
    zipCode: "03068",
    city: "Seoul",
  },
};

const {
  address: { city },
} = user;
console.log(city);

/*
* 변수란?
프로그래밍 언어에서 데이터를 관리하기 위한 개념

10 + 30 = ?
변수란 하나의 값을 저장하기 위해 확보한 메모리 공간 자체
혹은 그 값을 의미, 그 메모리 공간의 이름

변수에는 변수이름과 변수값으로 이루어져있고
변수이름은 식별자라고도 한다.
즉 변수이름 , 식별자는 값을 기억하는 것이 아니라
메모리 주소를 기억하고 있는것입니다

*변수선언
변수는 사용하려면 선언 , 즉 생성해야합니다
변수선언에는 방법이 var , let , const 라는 방법 (키워드)가 존재합니다

*변수선언의 과정
`1. 선언단계 : 변수 이름을 등록해서 자바스크립트 엔진에 변수에 
존재를 알립니다
2. 초기화단계(대입) : 값을 저장하기 위한 메모리 공간을 확보히고,
암묵적 undifined를 할당하여서 초기화

*변수의 값의 할당과 사용
할당연산자인 = 으로 할당하며 우변의 값이 좌변에 할당합니다

*변수이름을 짓는 방법
1. 숫자로 시작할수없다
2. 특수문자 삽입불가하지만 ( 단 _, $는 가능하다)
3. "-" 사용이 불가능 (예약어)
4. 모든 예약어는 사용 불가능
5. 대소문자는 다른언어로 구분되어야한다
6. 한글도 가능은 하지만 ,사용을 안하는것이 좋다

-변수끼리는 연산도 가능하다

*변수이름 지정시 표기법
1. 카멜 표기법 : goodApple
2. 스네아크 표기법 : good_apple
3. 파스칼 표기법 : GoodApple
각 단어의 첫글자를 대문자로 표기하고 나머지는 소문자로 표시
4. 헝가리언 표기법 : numberApple
변수의 데이터 타입을 변수이름 앞에 붙임

-추천하는 표기법은 카멜/ 스네이크이다

*데이터 타입
3 (숫자)
삼 (문자)
ture (boolean)

*변수 선언 방법의 종류 
1. var 
es5 이전까지의 방법으로 여기에는 문제점이 있는 선언 방법이지만,
지금도 사용가능하다
문제점 1. 변수 중복선언이 가능하다
var add =30;

var add ="안녕";
문제가 일어나는 이유 : 중요한 값을 넣은 변수일경우
해당 변수의 값이 변경되버리는 불상사가 일어날수있다

문제점2. 함수레벨 스코프
변수의 스코프 : 변수가 영향을 끼치는 범위를 의미히며
종류로는 지역. 전역이 있다
-지역변수
js에서는 {}로 구분되는데 이 한 구역안에서만 영향을 끼치는 변수를
지역변수라고 한다
-전역변수
하나의 페이지 전체에서 영향을 끼치는 변수를 전역변수라고 한다
함수레벨 스코프란?
var로 변수를 선언하게 되면 함수안에서 적용된 지역변수만 지역변수화 되고
나머지는 전역변수화 되는 버그현상

문제점 3.호이스팅의 문제
-호이스팅이란?
변수선언이 스코프의 선두로 끌어올려진 것처럼 동작하는 자바스크립트의 고유특징

변수의 선언이 소스 코드의 한줄씩 순차적으로 실행되는 시점
(런타임)이 아니라, 그 이전 단계인 준비단계 즉 
문서의 처음 읽는 단계에서 모든 선언문을 이미 읽고 알고 시작합니다
그리고 순차적으로 소스코드를 평가합니다
이 과정에서 js는 모든 선언을 읽고 알기때문에 변수이름을
알고 시작합니다

2. let 으로 선언하는 방법
let 은 var 의 문제점을 es6에서 개선한 키워드이다
-해결된내용 
1번 변수중복선언이 안됨
2번 호이스팅을 극복 (해결한것이 아님)

let abc = 1;

{
    console.log(abc);
    let abc = 2;
}
let은 호이스팅을 극복한것이지 해결한것이 아니다
위의 예제에서 호이스팅이 해결된것이라면 
전역으로 선언한 값 1이 콘솔에 찍혀야 하지만 
콘솔에는 레퍼런스에러가 나온다
그 이유는 2의 값을 넣은 선언문이 호이스팅이 되었기 때문이다

즉 데드존을 만들어서 레퍼런스만 못하게 한것으로
극복한것이 아니다

3.const로 선언하는 방법
변수 즉 변할수 있는 것이아니라 상수 변하지않는 것을 선언하는 방법이다
let 과 거의 동일하다
단 consts는 반드시 선언과 동시에 초기화 작업을 헤야한다

let add;
const avvv; -> 에러가 뜬다
const avvv = 30 ;
반드시 값을 넣어주어야한다

주의 ) const 키워드는 재할당이 불가능할뿐이지 값이
불변하는 것은 아니다
데이터의 타입에 따라서 불변성이 달라집니다

let ad = 30 ;
ad = 40;

const aaa = 30;
aaa = 31;
console.log(aaa);














*/
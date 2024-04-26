console.log("Hello world!");
console.log("Hello world!");

/*변수선언 let: 한번 선언했으면 같은이름으로 두번은 못함*/
let valuae = 1;
value = "에헤라디야";
console.log(value)

/*상수선언 const : 값을 바꿀 수 없다 같은이름 두번 선언도 안됨!*/
const ca = 1;

/*boolean 선언*/
let good = true;
let bad = false;
console.log(good, bad)


/*null과 undefined 차이*/
const friend = null;
let criminal ;
console.log("일부러 비운 값", friend)
console.log("정해지지 않은", criminal)

/*연산자 차이*/
/*연산자: 나누기/ , %는 나머지 반환*/
let a = 1;
console.log("a++은 더하기직전값을 보여준다:", a++)
console.log("++a는 더하고 난 뒤의 값을 보여준다. 뺄셈도 마찬가지", ++a)
a +=3;
console.log("복합연산자가 가능하다:", a)

/*논리연산자 !, &&, ||. 연산순서는 not-and-or 순 */
const nnot = !true;
const aand = false&&true;
const oor = false||true;
console.log("낫",nnot, "교",aand, "합",oor);


/*비교연산자 === */
const aa = 1;
/*타입까지검사*/
const eq = a === a;
const aaa = "1";
/*1과 "1"을 똑같이취급하는 ==*/
const eqa= aa == aaa;
var eqq = a === aaa;
console.log("1 === 1:", eq);
console.log("1 == '1'", eqa);
console.log("1==='1", eqq);
/*0과false도 ==은 똑같이 간주된다*/
var z = 0;
var zz = false;
var equz = z === z;
console.log("0과 false는:", equz);
/*!==*/
var dif = 'a' !== 'b';
console.log('a와 b는 다르다!!!', dif);

var o = 10;
var oo = 15;
var ooo = 15;
console.log("비교연산자<", o < oo); // true
console.log(oo > o); // true
console.log(oo >= ooo); // true
console.log(o <= ooo); // true
console.log(oo < ooo); // false;

var o = "ola"
var oo = "하세요"
console.log("o+oo = ", o+oo);


console.log(a);
/*조건문 문법**/
if(a+1 === 7){
    console.log("6+1은 7이 맞아요");
}

if (o === a){
    console.log("this should not be operate");
}else if (a === 6){
    console.log("a는 6이네요");
}
else{
    console.log("내가 바란건 하나야 한개뿐이야 달디단 밤양갱");
}

/*switch and case*/

const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}


/*반복문*/
console.log("반복문 깡총놀이")
for (let i = 0; i<10; i++){
    console.log(i,"깡총");
}
console.log("그만 지치고 말았습니다");

/*while문,break, continue 가능*/
let i = 0;
while (i < 10) {
  console.log("와왕",i);
  i++;
}

/*함수. return아래로는 호출안됨에 유의*/
function add(a,b){
    return a+b;
    console.log("호출되지 않는 코드");
}
var sum = add(3,5);
console.log(sum)

/*템플릿리터럴 백팁*/
function hello(name) {
    console.log(`Hello, ${name}!`); //따옴표가 아닌 백팁
  }
  hello('velopert');
  

/*화살표함수*/
const add1 = (a, b) => {
    return a + b;
  };
  
  console.log(add1(1, 2));

  /*기본파라미터 넣어주기. 안넣어주면 nan. r로만되면 nan 나오지만 r =1 을 넣어줘 default가 설정되었다. */
function calCircleArea(r =1){
    console.log("원의 넓이를 구해주는 함수입니다");
    return Math.PI*r*r;
}
const aarea = calCircleArea();
console.log(area);

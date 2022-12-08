/* 
자판기라는 함수를 정의
자판기 함수는 처음에  실행되었을 때 '자판기가 가동되었습니다' console
매겨변수로는 coin과 메뉴이름

리턴 값은
잔돈이 0원이면 음료수 이름을 리턴
잔돈이 있으면 음료수 이름과 잔돈을 리턴

선택한 음료수의 값이 coin보다 클 경우
console 금액이 부족합니다.

메뉴

솔의눈  : 300원
비타500 :  500원
콜라    : 1000원

없는 메뉴를 선택하면 존재하지 않는 상품입니다.(선택)

트랜드 a~z 깊이 전문분야

*/

function 자판기(coin, menu) {
    console.log("자판기가 가동되었습니다.");
    let product = { 솔의눈: 300, 비타500: 500, 콜라: 1000 };
    let menuprice = product[menu];
    let change = coin - menuprice;

    if (change < 0) return console.log("돈이 부족합니다.");
    if (!menuprice) return console.log("품목이 없어요");
    console.log(`선택한 음료 : ${menu}, 잔돈 : ${change}`);
}

자판기(200, "의눈");

//ajax 환율정보 불러오기
$.ajax({
    type: "GET",
    url: "https://api.manana.kr/exchange/rate.json",
    data: {},
    success: function (response) {
        let rate = response[1]['rate'];
        let tempText =  `<p class="blue-font">달러 원 환율 : ${rate} </p>`;
        //검색 결과 나타난 정보를 표시
        $('#exchange').append(tempText);
        }
    })

//유효성 검사
function formCheck() {
    let orderName = document.getElementById('orderName').value;
    let orderAmount = document.getElementById('orderAmount').value;
    let orderAddress = document.getElementById('orderAddress').value;
    let orderPhoneNum = document.getElementById('orderPhoneNum').value;

    if (orderName == '') {
        alert('이름을 입력해주세요');
        return false;
    }
    if (orderAmount == '') {
        alert('수량을 설정해주세요');
        return false;
    }
    if (orderAddress == '') {
        alert('주소를 입력해주세요');
        return false;
    }
    if (orderPhoneNum == '') {
        alert('전화번호를 입력해주세요');
        return false;
    }
    alert('주문이 완료되었습니다');
}
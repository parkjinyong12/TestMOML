//자바스크립트 시작***************
<!-- 여기에 자바스크립트 작성 -->

var map;
var infoWindow;
var infoOldNum


//지도 초기화 코드 입니다.
function initialize() {  //함수 시작==================

//위에 정한 지도 표시 영역을 mapDiv 변수에 활당하고 있습니다.
var mapDiv = document.getElementById('map');

//위에서 전역변수로 활당한 map 이라는 변수에 지도를 생성 합니다.
//지도를 생성하는 곳의 위치는 위에서 mapDiv 변수에 활당하여 넘겨 줍니다.
map = new google.maps.Map(mapDiv, {

//임의의 위도, 경도 값으로 중심 위치를 잡습니다.
center: new google.maps.LatLng(37.5544, 126.9699),

//zoom 값이 작으면 축소된 지도 크면 확대된 지도가 보입니다.
zoom: 16,

//지도의 타입을 로드맵 형태로 잡았습니다.
mapTypeId: google.maps.MapTypeId.ROADMAP
});



//지도를 초기화 하고 아래에서 정의한 마커 표시 함수를 실행하여 마커를 표시 한다.
//dispMarks();



}

//마커를 지도에 표시 한다.
//---------------------------------------------------------------------
//캠핑장 아이콘을 표시 한다.

//각 캠핑장의 위치를 배열에 넣어서 지도에 표시 할 수 있도록 합니다.
//위도, 경도를 배열에 저장한다.
var latarray = new Array("37.4419", "37.4519", "37.4719");
var longarray = new Array("122.1419", "122.1419", "122.1419");

function dispMarks(){

//마커를 클릭할 경우 말풍선을 표시 할 수 있도록 하는 변수를 선언한다.
infoWindow = new google.maps.InfoWindow();


for(var c = 0; c < 3; c++){
 //아래에서 정의한 마커생성 함수를 마커 갯수만큼 돌리면서 마커를 만든다.
createMarker(map, c);
}

}

//마커 생성하고 표시 하기
//---------------------------------------------------------------------

//생성된 마커를 저장할 변수를 활당한다.
var markobj = new Array();



//위에서 처럼 지도에 캠핑장 텐트 아이콘을 찍는 함수.
function createMarker(map, n) {

//아이콘으로 사용할 이미지는 미리 준비하세요.
//여기서는 campIcon.png 라는 이름으로 이미지를 만들었습니다.
//이미지가 있는 곳의 경로와 함께 icon 변수에 활당 하세요.

var icon = "/images/campIcon.png";


//미리 생성한 위도, 경도값을 이용하여 마커의 표시 위치를 latLng 변수에 활당한다.
var latLng = new google.maps.LatLng(latarray[n], longarray[n]);


//위에서 생성한 변수에 각 마커의 정보를 저장한다.
markobj[n] = new google.maps.Marker({
position: latLng,  //마커의 표시 위치를 활당한다.
map: map,    //위에서 초기화 하여 생성한 지도를 활당 합니다.
icon: icon    //위에서 준비한 이미지를 아이콘으로 설정 합니다.
});


//마커를 클릭했을 때 아래와 같이 풍선도움말이 표시되게 한다.



//마커를 클릭하면 실행되는 함수 이다.
google.maps.event.addListener(markobj[n], 'click', function() {
//먼저 클릭한 안내를 삭제 한다.
infoWindow.close(map, infoOldNum);

if(infoOldNum != n) infoOldNum = n;


var myHtml = '<div >Hello, world</div>';


infoWindow.setContent(myHtml);
infoWindow.open(map, markobj[n]);
});
}


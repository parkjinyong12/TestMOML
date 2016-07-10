function fnMove(eventPageid,eventAction,changePageid,changeAction1,changeAction2,afterEvent) {
    if(changeAction1 == "slide" && changeAction2 == "reverse"){
        $("#" + eventPageid + " .page-moving").bind(eventAction,function(){
            $.mobile.changePage("#" + changePageid,changeAction1,changeAction2);
        });
    } else {
        $("#" + eventPageid + " .page-moving").bind(eventAction,function(){
            $.mobile.changePage("#" + changePageid,changeAction1);
        });
    }

    // 구글 지도 초기화
    if(changePageid == "page2") {
        initialize();
    }
}

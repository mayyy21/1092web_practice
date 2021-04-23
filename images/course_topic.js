var topic=[
    "剛期中考完",
    "可以放鬆心情~",
    "和家人出去玩",
    "今天會有好天氣",
    "出門記得帶傘喔~"

];

var startDate =new Date();
function setMonthAndDay(){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);
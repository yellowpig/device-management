function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y+M+D+h+m+s;
}

function getXmlHttpObject() {

    var xmlHttpRequest;
    if(window.ActiveXObject){
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else{
        xmlHttpRequest = new XMLHttpRequest();
    }
    return xmlHttpRequest;

}

var myXmlHttpRequest="";
var deviceId = UrlParm.parm("deviceId");
var deviceNum = UrlParm.parm("deviceNum");
var sectionA = document.getElementById("transportId");
sectionA.setAttribute("href","dydatatrue.html?deviceId="+deviceId+"&deviceNum="+deviceNum);

/*function getdata() {

    myXmlHttpRequest = getXmlHttpObject();
    if(myXmlHttpRequest){
        //var url = "toajax?username=" + document.getElementById("username").value;
        var url = "http://10.108.218.64:8090/api/analysis/data";
        var data = "tenantId=200&startTime=1522631722000&endTime=1525631722000&partNum=7";
        //myXmlHttpRequest.open("get",url,true);
        myXmlHttpRequest.open("post",url,true);//url="http://10.108.218.64:8090/api/analysis/device"
        myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        myXmlHttpRequest.onreadystatechange = proce;
        //myXmlHttpRequest.send(null);
        myXmlHttpRequest.send(data);
    }

    function proce() {

        if(myXmlHttpRequest.readyState==4) {
            var myChart = echarts.init(document.getElementById('main'));
            var xAxisData = [];
            var day = [];
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var mes = myXmlHttpRequest.responseText;
            var mes1 = JSON.parse(mes);
            meso = eval("("+mes1+")");
            window.alert(mes1);
            window.alert(meso);
            //window.alert(meso.data[0]["0"]);
            //window.alert(Object.keys(meso.data).length);
            for(var i=0; i<Object.keys(meso.data).length;i++){
                data1.push(meso.data[i]["0"]);
            }
            for(var i=0; i<Object.keys(meso.data).length;i++){
                data2.push(meso.data[i]["1"]);
            }
            for(var i=0; i<Object.keys(meso.data).length;i++){
                data3.push(meso.data[i]["2"]);
            }
            //for (var item in meso.data[0]){
                //day.push(item);
                //data1.push(meso.data[0][item]);
            //}
            //for (var item in meso.data[1]){
            //    data2.push(meso.data[1][item]);
            //}
            //for (var item in meso.data[2]){
            //    data3.push(meso.data[2][item]);
            //}
            //for (var i = 0; i < day.length; i++) {
            //    xAxisData.push(day[i]);
            //}

            option = {
                title: {
                    text: '统计数据 '+"  设备"+deviceNum+"  ID:"+ deviceId
                },
                legend: {
                    data: ['最大值', '均值','最小值'],
                    align: 'left'
                },
                toolbox: {
                    // y: 'bottom',
                    feature: {
                        magicType: {
                            type: ['stack', 'tiled']
                        },
                        dataView: {},
                        saveAsImage: {
                            pixelRatio: 2
                        }
                    }
                },
                tooltip: {},
                xAxis: {
                    data: xAxisData,
                    silent: false,
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    name:'温度'
                },
                series: [{
                    name: '最大值',
                    type: 'bar',
                    data: data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                }, {
                    name: '均值',
                    type: 'bar',
                    data: data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                },
                    {
                        name: '最小值',
                        type: 'bar',
                        data: data3,
                        animationDelay: function (idx) {
                            return idx * 10;
                        }

                    }],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                }
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
}

getdata();*/

//var mes = myXmlHttpRequest.responseText;
//var mes1 = JSON.parse(mes);
//meso = eval("("+mes1+")");
//window.alert(mes1);
//window.alert(meso);
//window.alert(meso.data[0]["0"]);
//window.alert(Object.keys(meso.data).length);
/*for(var i=0; i<Object.keys(meso.data).length;i++){
    data1.push(meso.data[i]["0"]);
}
for(var i=0; i<Object.keys(meso.data).length;i++){
    data2.push(meso.data[i]["1"]);
}
for(var i=0; i<Object.keys(meso.data).length;i++){
    data3.push(meso.data[i]["2"]);
}*/
//for (var item in meso.data[0]){
//day.push(item);
//data1.push(meso.data[0][item]);
//}
//for (var item in meso.data[1]){
//    data2.push(meso.data[1][item]);
//}
//for (var item in meso.data[2]){
//    data3.push(meso.data[2][item]);
//}
//for (var i = 0; i < day.length; i++) {
//    xAxisData.push(day[i]);
//}

var myChart = echarts.init(document.getElementById('main'));
var xAxisData = [];
var day = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var data5 = [];
var data6 = [];
var data7 = [];

option = {
    title: {
        text: '统计数据 '+"  设备"+deviceNum
    },
    legend: {
        data: ['最大值', '均值','最小值','标准差','数据条数','正常数据条数','正常数据比例'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        name:'温度'
    },
    series: [{
        name: '最大值',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: '均值',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 50;
        }
    },
        {
            name: '最小值',
            type: 'bar',
            data: data3,
            animationDelay: function (idx) {
                return idx * 100;
            }
        },{
            name: '标准差',
            type: 'bar',
            data: data4,
            animationDelay: function (idx) {
                return idx * 10 + 150;
            }
        },{
            name: '数据条数',
            type: 'bar',
            data: data5,
            animationDelay: function (idx) {
                return idx * 10 + 200;
            }
        },{
            name: '正常数据条数',
            type: 'bar',
            data: data6,
            animationDelay: function (idx) {
                return idx * 10 + 250;
            }
        },{
            name: '正常数据比例',
            type: 'bar',
            data: data7,
            animationDelay: function (idx) {
                return idx * 10 + 300;
            }
        }

    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

// 基于准备好的dom，初始化echarts实例
var inputStartDate = "";
var inputEndDate = "";
var splitNum = 7;
var finalDate = "";

function starttoend(dateId) {

    if (dateId == "fname") {
        inputStartDate = document.getElementById(dateId).value;
    }
    if (dateId == "fname1") {
        inputEndDate = document.getElementById(dateId).value;
    }
    if (dateId == "fname2") {
        splitNum = document.getElementById(dateId).value;
    }
}
function showData() {

    if((inputStartDate != "") && (inputEndDate != "")){
        window.alert("数据分析中···，请耐心等待");
        myXmlHttpRequest = getXmlHttpObject();
        if(myXmlHttpRequest){
            //var url = "toajax?username=" + document.getElementById("username").value;
            var url = "http://39.104.186.210:8090/api/analysis/data";//url="http://39.104.186.210:8090/api/analysis/data";getselectdata
            var startTime = new Date(inputStartDate);
            var startTimeChuo = startTime.getTime();
            var endTime = new Date(inputEndDate);
            var endTimeChuo = endTime.getTime();
            var data = "tenantId=1"+"&startTime="+startTimeChuo+"&endTime="+endTimeChuo+"&partNum="+splitNum;
            //myXmlHttpRequest.open("get",url,true);
            myXmlHttpRequest.open("post",url,true);
            myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            myXmlHttpRequest.onreadystatechange = proce;
            //myXmlHttpRequest.send(null);
            myXmlHttpRequest.send(data);
        }

        function proce() {

            if (myXmlHttpRequest.readyState == 4) {
                var myChart = echarts.init(document.getElementById('main'));
                var xAxisData = [];
                var data1 = [];
                var data2 = [];
                var data3 = [];
                var data4 = [];
                var data5 = [];
                var data6 = [];
                var data7 = [];
                var mes = myXmlHttpRequest.responseText;
                window.alert(mes);
                var mes1 = JSON.parse(mes);
                meso = eval("("+mes1+")");
                for (var item in meso.data[0]){
                    xAxisData.push(timestampToTime(item));
                    data1.push(meso.data[0][item]);
                }
                for (var item in meso.data[2]){
                    data2.push(meso.data[2][item]);
                }
                for (var item in meso.data[1]){
                    data3.push(meso.data[1][item]);
                }
                for (var item in meso.data[3]){
                    data4.push(meso.data[3][item]);
                }
                for (var item in meso.data[4]){
                    data5.push(meso.data[4][item]);
                }
                for (var item in meso.data[5]){
                    data6.push(meso.data[5][item]);
                }
                for (var item in meso.data[6]){
                    data7.push(meso.data[6][item]);
                }
                //window.alert(meso.data[0]["0"]);
                //window.alert(Object.keys(meso.data).length);
                /*for(var i=0; i<splitNum; i++){
                    xAxisData.push(i);
                }
                for(var i=0; i<Object.keys(meso.data).length;i++){
                    data1.push(meso.data[i]["0"]);
                }
                for(var i=0; i<Object.keys(meso.data).length;i++){
                    data2.push(meso.data[i]["2"]);
                }
                for(var i=0; i<Object.keys(meso.data).length;i++){
                    data3.push(meso.data[i]["1"]);
                }
                for(var i=0; i<Object.keys(meso.data).length;i++){
                    data4.push(meso.data[i]["3"]);
                }
                for(var i=0; i<Object.keys(meso.data).length;i++){
                    data5.push(meso.data[i]["4"]);
                }
                for(var i=0; i<Object.keys(meso.data).length;i++){
                    data6.push(meso.data[i]["5"]);
                }
                for(var i=0; i<Object.keys(meso.data).length;i++){
                    data7.push(meso.data[i]["6"]);
                }*/

                option = {
                    title: {
                        text: '统计数据 ' + "  设备" + deviceNum
                    },
                    legend: {
                        data: ['最大值', '均值', '最小值','标准差','数据条数','正常数据条数','正常数据比例'],
                        align: 'left'
                    },
                    toolbox: {
                        // y: 'bottom',
                        feature: {
                            magicType: {
                                type: ['stack', 'tiled']
                            },
                            dataView: {},
                            saveAsImage: {
                                pixelRatio: 2
                            }
                        }
                    },
                    tooltip: {},
                    xAxis: {
                        data: xAxisData,
                        silent: false,
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        name: '温度'
                    },
                    series: [{
                        name: '最大值',
                        type: 'bar',
                        data: data1,
                        animationDelay: function (idx) {
                            return idx * 10;
                        }
                    }, {
                        name: '均值',
                        type: 'bar',
                        data: data2,
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        }
                    },
                        {
                            name: '最小值',
                            type: 'bar',
                            data: data3,
                            animationDelay: function (idx) {
                                return idx * 10;
                            }
                        },
                        {
                            name: '标准差',
                            type: 'bar',
                            data: data4,
                            animationDelay: function (idx) {
                                return idx * 10;
                            }
                        },
                        {
                            name: '数据条数',
                            type: 'bar',
                            data: data5,
                            animationDelay: function (idx) {
                                return idx * 10;
                            }
                        },
                        {
                            name: '正常数据条数',
                            type: 'bar',
                            data: data6,
                            animationDelay: function (idx) {
                                return idx * 10;
                            }
                        },
                        {
                            name: '正常数据比例',
                            type: 'bar',
                            data: data7,
                            animationDelay: function (idx) {
                                return idx * 10;
                            }
                        }
                    ],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function (idx) {
                        return idx * 5;
                    }
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }else{
        window.alert("输入有误");
    }

}

//var timestamp1 = Date.parse(new Date());
//window.alert(timestamp1);
//var timestamp1 = new Date();
//window.alert(timestamp1.getFullYear()+timestamp1.getDate()+"");
//var timestamp1 = Date.parse(new Date());
//window.alert(new Date(timestamp1));
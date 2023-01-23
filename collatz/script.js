function plot(){
    let num = document.getElementById("number").value;
    if (num != "" && parseInt(num) == num && num > 0) {
        document.getElementById("plot").style.display="block";
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();

        xArray = [];
        yArray = [];
        strArray = [];

        let cnt = 1;
        let fourCnt = 0;

        while (fourCnt < 2) {
            if (cnt % 10 == 0) {
                strArray.push("<br>");
            }
            xArray.push(cnt);
            yArray.push(num);
            strArray.push(num);
            if (num %2 == 1) {
                num = 3*num+1;
            } else {
                if (num == 4) {
                    fourCnt += 1;
                }
                num = num/2;
            }
            cnt += 1;
        }

        ctx.moveTo(xArray[0]/Math.max(...xArray)*(c.width), (-yArray[0]/Math.max(...yArray)*c.height+c.height)*0.9+20);
        for (let i = 1; i < xArray.length-1; i++) {
            ctx.lineTo(xArray[i]/Math.max(...xArray)*(c.width), (-yArray[i]/Math.max(...yArray)*c.height+c.height)*0.9+20);
        }
        ctx.strokeStyle = "#20b2aa";
        ctx.stroke();
        
        var titleStr = document.getElementById("title");
        titleStr.innerHTML = "Collatz conjecture starting with " + yArray[0] + "<br>" + yArray[0] + " から始まるコラッツ数列";
        var resultStr = document.getElementById("result");
        resultStr.innerHTML = "Result | 結果";
        
        var yDataStr = document.getElementById("yData");
        strArray.pop();
        yDataStr.innerHTML = strArray.join(" ");
    } else {
        alert("Input integer greater than 1. \n 1以上の整数を入力してください。")
    }
}

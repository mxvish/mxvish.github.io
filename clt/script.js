const calculateMean = (values) => {
    const mean = (values.reduce((sum, current) => sum + current)) / values.length;
    return mean;
};

const calculateVariance = (values) => {
	const arr = values.map((value) => {
		return value**2;
	});
	return calculateMean(arr) - calculateMean(values)**2;
};

function plot(){
    let num = document.getElementById("number").value;
    if (num != "" && parseInt(num) == num && num > 0) {
        document.getElementById("plot").style.display="block";
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();

        strArray = [];
		arr = [];
		n = Math.pow(10,3);
	
		for (let i = 0; i < n; i++) {
			data = 0;
			for (let j = 1; j <= num; j++) {
				data += Math.ceil(Math.random() * 6);		
			}
			arr.push(data);
		}
		const count = {};

		for (const a of arr) {
			count[a] = count[a] ? count[a] + 1 : 1;
		}
		max = count[Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b)];
		strArray.push("Distribution of sum when " + num + "<br>die(dice) was(were) thrown<br>" +  num + "個のサイコロを振った時の<br>目の総和の分布<br><br>");
		
		for (let k = num; k <= num * 6; k++) {
			if (strArray.length % 10 == 0) {
				strArray.push("<br>");
			}
			if (typeof count[k] == 'undefined') {
				count[k] = 0;
			}
			ctx.moveTo(k*c.width/(num*7), c.height);
			ctx.lineTo(k*c.width/(num*7), -count[k]*2+c.height);

			//ctx.lineTo(k*c.width/(num*7), -count[k]/max*c.height+c.height);
			strArray.push(count[k]/n);
		}

		ctx.lineWidth = 4;
		ctx.strokeStyle = "#20b2aa";
		ctx.stroke();

        var titleStr = document.getElementById("title");
        titleStr.innerHTML = "Central limit theorem simulation<br>of " + num + "d6<br>" + num + "d6の中心極限定理の<br>シミュレーション";
        var resultStr = document.getElementById("result");
        resultStr.innerHTML = "Result | 結果<br>Mean | 平均: " + calculateMean(Object.values(count)).toFixed(2) + "<br>Variance | 分散: " + calculateVariance(Object.values(count)).toFixed(2);
		
        var yDataStr = document.getElementById("yData");
        strArray.pop();
        yDataStr.innerHTML = strArray.join(" ");
    } else {
        alert("Input integer equals to or greater than 1. \n 1以上の整数を入力してください。")
    }
}

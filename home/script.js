function check(num, answers) {
    var input = document.getElementById("q" + num + "answer").value.toString();
    if (answers.includes(input)) {
        if (num < 7) {
            document.getElementById('correct').style.display='block';
        }
        document.getElementById(`q${num + 1}`).style.display = "block";
    } else {
        document.getElementById('incorrect').style.display='block';
    }
}


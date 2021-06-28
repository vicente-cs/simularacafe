var questions = 73;

Number.prototype.toFixedDown = function (digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function simularScore() {
    var score_num = DM["portugues"].length; //O comprimento do dict "DM" deve ser igual em todas as matérias, qualquer valor da constante pode ser utilizado
    var SUMETdisc = Array.from({ length: score_num }, i => 0);
    var forms = document.getElementsByClassName("score");

    for (var key in DM) {
        var Adisc = forms[key].value;
        var subject_questions = 7;

        var special_subject = { "portugues": 14, "redacao": 10 };

        if (key in special_subject) subject_questions = special_subject[key]

        for (b = 0; b < score_num; b++) {
            var ETdisc = 500 + 100 * ((Adisc - DM[key][b][0]) / DM[key][b][1]) * (subject_questions / questions);
            SUMETdisc[b] += ETdisc;
        }

    }

    var average = 0

    for (i = 0; i < SUMETdisc.length; i++) {
        SUMETdisc[i] = SUMETdisc[i].toFixedDown(4)
        average += SUMETdisc[i]
    }

    average = average / SUMETdisc.length

    var result_display = document.getElementById("result_div");
    result_display.style.display = "inline-block";

    var result_text = document.getElementById("result_text");
    var preprocessed_result_text = `Escore médio: ${average}` //Constrói texto antes de mudar o conteúdo do HTML

    var exam_period = ["Verão 2021", "Verão 2020", "Inverno 2019", "Verão 2017", "Verão 2016"]
    for (i = 0; i < exam_period.length; i++) {
        preprocessed_result_text += `<br>Escore Vestibular de ${exam_period[i]}: ${SUMETdisc[i]}`;
    }

    result_text.innerHTML = preprocessed_result_text;
}

var questions = 73;

const DM = {"portugues": [[9.5841, 1.9097], [9.391, 2.0529], [8.0647, 2.1639], [10.4171, 2.3617], [9.9333, 2.0949]],
"ling_estrangeira": [[3.5837, 1.6400], [3.6627, 1.6272], [3.8, 1.6211], [3.6507, 1.7198], [4.0011, 1.3723]],
"fisica": [[2.9820, 1.5892], [3.0578, 1.4688], [2.7628, 1.4198], [3.2335, 1.2664], [2.4771, 1.3807]],
"matematica": [[2.5865, 1.5440], [2.4469, 1.3664], [2.2443, 1.3205], [2.6477, 1.3634], [2.4292, 1.2701]],
"historia": [[4.6392, 1.6963], [4.2666, 1.7146], [4.3575, 1.7604], [3.4983, 1.5646], [3.7311, 1.5945]],
"biologia": [[4.3503, 1.3643], [3.948, 1.4346], [3.1512, 1.419], [3.5935, 1.3698], [3.2225, 1.3863]],
"geografia": [[3.3316, 1.5596], [4.5413, 1.1729], [4.4732, 1.5445], [5.516, 1.1297], [4.722, 1.5685]],
"quimica": [[2.5027, 1.4716], [2.2325, 1.3198], [5.067, 1.0781], [3.4715, 1.0977], [2.5715, 1.5266]],
"redacao": [[6.1175, 1.1393], [6.1166, 1.0908], [6.3069, 1.1294], [6.0408, 1.2767], [6.0849, 1.2178]]}

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function simularScore() {
    var score_num = DM["portugues"].length; //O comprimento do dict "DM" deve ser igual em todas as matérias, qualquer valor da constante pode ser utilizado
    var SUMETdisc = Array.from({length:score_num}, i => 0);
    var forms = document.getElementsByClassName("score");

    for (var key in DM) {
        var Adisc = forms[key].value;
        var subject_questions = 7;

        var special_subject = {"portugues": 14, "redacao": 10};

        if (key in special_subject) subject_questions = special_subject[key]
        
        for (b = 0; b < score_num; b++) {
        var ETdisc = 500 + 100 * ((Adisc - DM[key][b][0])/DM[key][b][1]) * (subject_questions / questions);
        SUMETdisc[b] += ETdisc;
        }
        
    }

    var average = 0

    for (i=0;i<SUMETdisc.length;i++) {
        SUMETdisc[i] = SUMETdisc[i].toFixedDown(4)
        average += SUMETdisc[i]
    }

    average = average / SUMETdisc.length

    var result_display = document.getElementById("result_div");
    result_display.style.display = "inline-block";
    
    var result_text = document.getElementById("result_text");
    var preprocessed_result_text = `Escore médio: ${average}` //Constrói texto antes de mudar o conteúdo do HTML

    var exam_period = ["Verão 2021", "Verão 2020", "Inverno 2019", "Verão 2017", "Verão 2016"]
    for (i=0;i<exam_period.length;i++) {
        preprocessed_result_text += `<br>Escore Vestibular de ${exam_period[i]}: ${SUMETdisc[i]}`;
    }

    result_text.innerHTML = preprocessed_result_text;
}

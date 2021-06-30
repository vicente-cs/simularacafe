//Limita o número de casas após a vírgula
Number.prototype.toFixedDown = function (digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function simularScore() {
    //Array com o escore de todos os anos listados em data.js
    var scores = [];

    var questions_num = {
        "portugues": 14,
        "ling_estrangeira": 7,
        "fisica": 7,
        "matematica": 7,
        "historia": 7,
        "biologia": 7,
        "geografia": 7,
        "quimica": 7,
        "redacao": 10
    }

    //Texto final, que demonstrará os resultados
    var result_text = ""

    //Notas
    var forms = document.getElementsByClassName("score");


    //Iteração entre anos
    for (i = 0; i < DM.length; i++) {

        //Somatório de escores de apenas uma edição
        var exam_score = 0

        //Iteração entre matérias
        for (var subject in DM[i]["subjects"]) {
            const Adisc = forms[subject].value;
            const Mdisc = DM[i]["subjects"][subject]["Mdisc"];
            const DPisc = DM[i]["subjects"][subject]["DPdisc"];
            const P = questions_num[subject] / 73;

            //Escore transformado da disciplina
            const ETdisc = 500 + 100 * ((Adisc - Mdisc) / DPisc) * P;
            exam_score += ETdisc;
        }

        scores.push(exam_score)
        //Nome da edição do vestibular, ex: "Vestibular de Verão 2020"
        const exam_name = DM[i]["name"];

        //Adiciona texto à resposta final que aparecerá ao usuário.
        result_text += `<br>Escore Vestibular de ${exam_name}: ${exam_score.toFixedDown(4)}`;
    }

    let average = (array) => array.reduce((a, b) => a + b) / array.length;


    //Adiciona a média de todos os escores ao texto de resposta
    result_text = `Escore médio: ${average(scores).toFixed(4)}` + result_text

    var result_display = document.getElementById("result_div");
    result_display.style.display = "inline-block";
    result_display.innerHTML = result_text;

}

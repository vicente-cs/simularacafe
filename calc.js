var questions = 73;

var DM = [["Português", 9.3910, 2.0529], ["Ling. Estrangeira", 3.6627, 1.6272], ["Redação", 6.1166, 1.0908], ["Matemática", 2.4469, 1.3664], ["Física", 3.0578, 1.4688], ["Biologia", 3.9480, 1.4346], ["Química", 2.2325, 1.3198], ["História", 4.2666, 1.7146], ["Geografia", 4.5413, 1.1729]]

function simularScore() {
    var SUMETdisc = 0;
    var forms = document.getElementsByClassName("score");

    for (i = 0; i < forms.length; i++) {
        var Adisc = forms[i].value;
        var subject_questions;
        if (i == 0) {
            subject_questions = 14;
        }
        else if (i == 2) {
            subject_questions = 10;
        }
        else {
            subject_questions = 7;
        }
        
        var ETdisc = 500 + 100 * ((Adisc - DM[i][1])/DM[i][2]) * (subject_questions / questions);
        SUMETdisc += ETdisc;
    }
    var result_display = document.getElementById("result_div");
    result_display.style.display = "inline";
    
    var result_text = document.getElementById("result_text");
    result_text.innerHTML = "Nota estimada: " + SUMETdisc;
}
var questions = 73;

var DM = [['Português', 9.4515, 2.1683], ['Ling. Estrangeira', 3.7786, 1.5851], ['Física', 2.8828, 1.3839], ['Matemática', 2.442, 1.3301], ['História', 3.9633, 1.6585], ['Biologia', 3.4788, 1.4024], ['Geografia', 4.8131, 1.3539], ['Química', 3.3356, 1.2555], ['Redação', 6.1373, 1.1786]]

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
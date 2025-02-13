document.addEventListener("DOMContentLoaded", function() {        
                           
    //inputs the characters in the display
    const displayFrame = document.getElementById("display");

    window.charInput = function (char) {
        switch (char) {
            default:
                if (displayFrame.value == 0) {
                    displayFrame.value = char;
                } else {
                    displayFrame.value += char;
                }
                break;
            case "C":
                displayFrame.value = "0";
                break;
            case "=":
                try {
                    displayFrame.value =
                    eval(displayFrame.value);
                } catch {
                    displayFrame.value = "Error";
                }
        }
    };

    //animation of the header
    function animacao() {
        const frase = "JavaScript Calculator!";
        let i = 0;

        function escrever() {
            if (i < frase.length) {
                document.getElementById("anim").textContent += frase[i];
                setTimeout(escrever, 100);+
                i++
            }
        }
        escrever();
    }                        
    animacao();    

});       
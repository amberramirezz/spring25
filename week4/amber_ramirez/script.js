<img src="https://ih1.redbubble.net/image.1272486145.7615/st,small,507x507-pad,600x600,f8f8f8.jpg" onclick="addOneToCounter()"/>
<script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>
<script src="/week4/amber_ramirez/script.js"/>
import JSConfetti from 'js-confetti'

function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}


const jsConfetti = new JSConfetti();

function rain(){
    if(document.getElementById("counter").innerText = 0){
        jsConfetti.addConfetti()
    }
}

const skoleni = ["Emīls", "Natālija", "Edijs", "Edgars"]

function paraditSkolenusLapa() {
   let pilnsTeksts = ""; //ar dubultpēdiņām pasaka datu tipu
   for (let i=0; i<skoleni.length; i = i + 1){
      pilnsTeksts = pilnsTeksts + skoleni[i] + " ir " +(i+1)+ ". skolēns<br>"
   }

   document.getElementById("container").innerHTML = pilnsTeksts;
}

paraditSkolenusLapa();



document.getElementById("pievienot-poga").addEventListener("click", () => {
   
   skoleni.push(document.getElementById("pievienot-vardu").value)
   paraditSkolenusLapa();


   console.log(skoleni)
})
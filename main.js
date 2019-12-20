function cek(){

    var question1 = document.kuis.question1.value;
    var question2 = document.kuis.question2.value;
    var question3 = document.kuis.question3.value;
    var question4 = document.kuis.question4.value;
    var question5 = document.kuis.question5.value;
    var score = 0;

    if(question1 === "omnivora" || question1 === "temanvora"){
        score ++;
    }
    if(question2 === "pemberi harapan palsu" || question2 === "mantan teman"){
        score ++;
    }
    if(question3 === "Slow Motion"){
        score ++
    }
    if(question4 === "Mencari batu akik" || question4 === "Mencari rempah-rempah"){
        score ++
    }
    if(question5 === "Banyak Uang"){
        score ++
    }

   var message =["Hebat njirrr!!", "Okelah kalau begitu!", "Besok coba lagi ya..."];
   var picture =["image/win.gif", "image/not bad.gif", "image/i'll try.gif"];
   var range;

   if (score === 0){
       range = 2;
   }
   if (score > 0 && score < 4){
       range = 1;
   }
   if (score === 4 || score === 5){
       range = 0
   }
   document.getElementById("aksi").style.visibility = "visible";

   document.getElementById("message").innerHTML = message[range];
   document.getElementById("jawaban_benar").innerHTML = "Kamu dapat " + score + " poin.";
   document.getElementById("picture").src= picture[range];
   window.scrollTo({ top: 0, behavior: 'smooth' })
   
} 
countbuttonclicked = 0;

function buttonCountdown(){
    countbuttonclicked = countbuttonclicked + 1;
    document.getElementById("butonapasat").innerText = "Utilizatorul a apasat butonul Home de " + countbuttonclicked + " ori!";
    console.log("Butonul a fost apasat de " + countbuttonclicked + " ori!")
}
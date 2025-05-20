
function promotion(année) {
    var image;
    if(année==2024){
        image = "promotion 2024.jpg";
    } else if(année==2023){
        image = "promotion 2023.jpg";
    } else if(année==2022){
        image = "promotion 2022.jpg";
    } else {
        image = "promotion 2021.jpg";
    }
    document.getElementById("monImage").src = image;
}
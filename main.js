Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img"src="'+data_uri+'">';


    })

}
console.log('ml5',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2OzZnv6Ta/',modelLoaded);
function modelLoaded(){
    console.log("teachable machine working");
}
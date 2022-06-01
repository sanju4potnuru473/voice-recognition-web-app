

function startClassification(error,results)
          
{
    
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HTVa9aIMb/model.json', modelReady);
}



function modelReady(){
    classifier.classify(gotResult);
}


function gotResults(error,results){
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()* 255)+1;
        random_number_b = Math.floor(Math.random()* 255)+1;

        document.getElementById("result_label").innerHTML = 'i can hear a'+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'accuracy'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r +","+random_number_g+"," +random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r +","+random_number_g+"," +random_number_r+")";


        img = document.getElementById('bird');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('dog');
        img3 = document.getElementById('sheep');
    }


        if(results[1].label=="bird"){
            img.src='bird.jpg';
           
        }  else if(results[1].label=="cat"){
            img1.src='cat.jpg';
           
        }  else if(results[1].label=="dog"){
            img2.src='dog.jpg';
           
        }  else if(results[1].label=="sheep"){
            img3.src='sheep';
           
        }       }

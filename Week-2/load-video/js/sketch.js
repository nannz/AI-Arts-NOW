let img //var,let,const...
let video;
let classifier;

let label, prob;
// function preload() {
//   img = loadImage("./img/green.jpg");
// }

function setup() {
  // put setup code here
  createCanvas(800, 600);
  video = createCapture(VIDEO);
  video.hide();//trick: hide the video to draw the video by ourselves
  classifier = ml5.imageClassifier('mobileNet',video,function(){//add video
    //call back function
    console.log("model is ready~");
  })
}

function draw() {
  // put drawing code here
  //background(ra ndom(255), 0, 255);
  image(video,0,0);
  classifier.predict(function(err,results){
    if(err){
      console.error(err);
    }
    //result
    console.log(results);
    label = results[2].className.split(',')[0];
    prob = results[2].probability;
    console.log(label);
    console.log(prob);
  });
  text(label + "\n" + prob, 10, 10);
  //noLoop(); video doesn't need to noloop()
}

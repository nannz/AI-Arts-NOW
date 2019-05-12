let img //var,let,const...
let classifier;

function preload() {
  img = loadImage("./img/green.jpg");
}

function setup() {
  // put setup code here
  createCanvas(800, 600);
  video = createCapture(VIDEO);
  classifier = ml5.imageClassifier('mobileNet',function(){
    //call back function
    console.log("model is ready~");
  })
}

function draw() {
  // put drawing code here
  //background(ra ndom(255), 0, 255);
  image(img,0,0);
  classifier.predict(img,function(err,results){
    if(err){
      console.error(err);
    }
    //result
    console.log(results);
    let label = results[2].className.split(',')[0];
    let prob = results[2].probability;
    console.log(label);
    console.log(prob);
    text(label + "\n" + prob, 10, 10);
    //text(string,w,h)
  });
  noLoop();
}

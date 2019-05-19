let video, yolo;
let outputs = [];

function setup() {
  // put setup code here
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();

  yolo = ml5.YOLO(video, function() {
    console.log("model loaded..YEH!");
  });
  console.log("test");

  strokeWeight(2);
  noFill();
  stroke(255);
}

function draw() {
  // put drawing code here
  image(video, 0, 0);

  yolo.detect(function(err, results) {
    //if failed, console.error()
    if (err) {
      console.log("something is wrong...");
    }
    //save the results into the output i defined, so that it can be used globally.
    outputs = results;
    console.log(outputs);
  });

  //outputs
  for(let i = 0; i < outputs.length; i++){
    let object = outputs[i];
    let name = object.className;
    let prob = object.classProb;
    let x = object.x * video.width;//relative position, (0,1)
    let w = object.w * video.width;
    let y = object.y * video.height;
    let h = object.h * video.height;


    rect(x,y,w,h);
    // console.log("rectangle done");
  }
}

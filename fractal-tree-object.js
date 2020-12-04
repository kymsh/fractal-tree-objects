//parameters
var size=500;
var angle=Math.PI/4;
var rateReduction=1.35;
var branchWeight=3;
var tree=[];
var count=0;
var leaves=[];


function mouseClicked(){
  //For each branch in tree[] create 3 new branches
  for(var i=tree.length-1;i>=0;i--){
    //look if the branch was drew
    if (!tree[i].finish){
      tree.push( tree[i].branch());
      tree.push( tree[i].branch());
      tree.push( tree[i].branch());
    }
    //change to true the drawn branches 
    tree[i].finish=true;
  }
  //count levels of branches
  count++;
  
  //Draw leaves in the 5th level of branches
  if(count===5){
    
    //add a leaf at the end of the last branches
    for(var i=0;i<tree.length;i++){
      
      if (!tree[i].finish){
        var leaf=tree[i].end.copy();
        leaves.push(leaf);
      }
      
    }
    

  }
}
// setup p5.js
function setup() {
  createCanvas(size, size);
    
  //begin and end vector of first branch
  var begin=createVector(width/2, height);
  var end=createVector(width/2, height-120);
  //create root, a Branch object.
  var root=new Branch(begin,end,rateReduction,branchWeight,angle);
  
  tree[0]=root;


}
 
//function draw de p5.js
function draw() {
  background(220);
  
  
  
  
  stroke(210,105,30);
  //draw branches in tree[]
  for(var i=0;i<tree.length;i++){
    
    tree[i].drawBranch();
    
    //tree[i].air();
    
  }
  fill(200, 0,100,100);
  noStroke();
  //draw leaves[]
  for(var i=0;i<leaves.length;i++){
    
    
    ellipse(leaves[i].x, leaves[i].y, 10, 10);

    //droping leaves
    leaves[i].y=leaves[i].y+random(0, 3);
    
  }

}

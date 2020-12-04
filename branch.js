class Branch {
    constructor(begin, end,rateReduction,branchWeight,angle) {
        //begin and end vector of a branch
        this.begin = begin;
        this.end = end;
        //rateReduction in next level of branches
        this.rateReduction=rateReduction;

        //if branch was drawn
        this.finish=false;

        //initial branchWeight
        this.branchWeight=branchWeight;
        //initial angle
        this.angle=angle;
        stroke(210,105,30);
    }

    drawBranch(){
        
        //reducing size of branches in each level
        strokeWeight(this.branchWeight*this.rateReduction);
        
        line(this.begin.x,this.begin.y,this.end.x,this.end.y);
        
    }
    branch(){
        
        //substract end and begin vector 
        var direction=p5.Vector.sub(this.end,this.begin);
        //rotate sub vector
        direction.rotate(random(this.angle)-this.angle/2);

        //make a random rateReduction
        direction.div((random()*this.rateReduction)+1);
        //new End of next branch
        var newEnd=p5.Vector.add(direction,this.end);
        //new size of next branch
        var newBranchWeight=this.branchWeight/this.rateReduction;
        //create next branch as a Branch object
        var nextBranch=new Branch(this.end,newEnd,this.rateReduction,newBranchWeight,this.angle);
        return nextBranch;
        
        
    }
   
    //air
    air(){
        this.end.x=this.end.x+random(-1, 1);
    }
}


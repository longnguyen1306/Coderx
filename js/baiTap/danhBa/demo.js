var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];

var name = 'clown';

for(var i in myFish){
    if(myFish[i]==name){
        myFish.splice(i,1);
        break;
    }
}


console.log(myFish);
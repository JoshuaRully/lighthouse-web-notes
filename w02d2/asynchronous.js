const start = Date.now();

let newVariable = new Date();
console.log(newVariable);

function wait(seconds){
  let now = (new Date()).getTime();
  var waitTill = new Date( now + seconds * 1000);
  while(waitTill > new Date()){
      // do nothing
  };    
}

const doAction = function(name,time,next){
  console.log(Date.now() - start + ': Starting ' + name + ':: This will take ' + time + 'seconds.');
  setTimeout(
    function(){
      console.log('Ending:' + name + ":: This took " + time + "seconds.");
      if (next === null) {
        // do nothing
      } else {
        next();
      }
    },
    time*1000
  );
}

console.log("I am alive!");

const look = () => {doAction("see with our camera.",1, null)};

setInterval(look,1500);

const getUp = () => {
  doAction("get up off the ground",3, walk);
}
const walk = () => {
  doAction("walk toward the door",7,openTheDoor);
}
const openTheDoor  = () => {
  doAction("open the door",2,walkThrough);
}
const walkThrough  = () => {
  doAction("walk through the door",5,null);
}

getUp();

console.log("I am done being programmed.");

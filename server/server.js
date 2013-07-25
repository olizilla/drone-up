/* 
drone-up server.js
==================
- Talk to the drone (nicely, it's got spinning blades)
- Listen to it's thoughts, and push them to the client.
*/

var drone = arDrone.createClient();

var emitFreq = 1000;

var navdata = {};

// Get telemetry from drone
drone.on('navdata', function(data){

  if (!navdata.sequenceNumber) { 
    console.log('Telemetry stream OK');    
  }

  data.serverTime = Date.now();
  navdata = data;
  // console.log(data);
});

// Push telemetry to db
Meteor.setInterval(function () {  
  if (!navdata.sequenceNumber) { return } // don't put empties in.

  Telemetry.insert(navdata);

}, emitFreq);

// Push commands to drone
Meteor.methods({
  cmd: function (fun) {
    console.log('Calling', fun);
    drone[fun]();
  }
});

console.log('==== DRONE UP! ====');

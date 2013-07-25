
Template.status.flying = function(){
  var data = Telemetry.findOne({}, {sort: {serverTime: -1}});
  // true if flying, otherwise false
  return data && data.droneState && !!data.droneState.flying;
};

Meteor.startup(function(){
  console.image('http://localhost:3000/nodecopter.png');﻿
});

// it's my global, i'll sully it just how I like.
takeoff = function() {
  Meteor.call('cmd', 'takeoff');
};

land = function() {
  Meteor.call('cmd', 'land'); 
};

left = function(duration) {
  // an exercise for the interested reader
};

right = function(duration) {
  // an exercise for the interested reader
};

up = function(duration) {
  // an exercise for the interested reader
};

down = function(duration) {
  // an exercise for the interested reader
};

fwd = function(duration) {
  // an exercise for the interested reader
};

back = function(duration) {
  // an exercise for the interested reader
};

Package.describe({summary: "A node.js client for controlling Parrot AR Drone 2.0 quad-copters."});

// Can't use a semver range here!
Npm.depends({"ar-drone": "0.1.0"});

Package.on_use(function (api) {
  api.add_files("ar-drone.js", "server");
});

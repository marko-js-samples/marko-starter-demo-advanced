require('./project').server({
  // additional config
  httpPort: 8888,

  buildNumber: Math.floor(Math.random() * 10)
});

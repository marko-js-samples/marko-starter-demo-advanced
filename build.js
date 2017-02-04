require('./project').build({
  // additional config
  buildNumber: Math.floor(Math.random() * 10),

  minify: true
}).then((buildResult) => {
  console.log(`Build result: ${JSON.stringify(buildResult.clean(), null, '  ')}`);
});

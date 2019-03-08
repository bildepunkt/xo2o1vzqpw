var fs = require("fs");
var path = require("path");

function getHtml (demoName) {
  return (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../../src/prism.css">
  <title>${demoName.charAt(0).toUpperCase() + demoName.slice(1)} Demo | ConsoleX</title>
</head>
<body>
  <a href="../../">Back</a>
  <br /><br />
  <canvas></canvas>
  <pre><code class="language-javascript"></code></pre>
  <script src="../../bundles/${demoName}.bundle.js"></script>
  <script src="../../src/prism.min.js"></script>
  <script src="../../src/fetchSource.js"></script>
  <script>fetchSource("./index.ts");</script>
</body>
</html>
`
  );
}

function onDirCreated (error, demoName) {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFileSync(path.join(__dirname, "pages", demoName, "index.html"), getHtml(demoName));
  fs.writeFileSync(path.join(__dirname, "pages", demoName, "index.ts"), (
`// code goes here!
`
  ));

  console.log("🍻 🍻 🍻\nDone!\n🍻 🍻 🍻");
  console.log("Don't forget to add your demo to webpack's `entry` map in `webpack.config.js`.");
  console.log("Don't forget to add a link to your demo in `demo/index.html`");
}

function init (demoName) {
  if (!demoName) {
    console.warn("⚠️  Please include a demo name! ⚠️");
    return;
  }
  fs.mkdir(path.join(__dirname, "pages", demoName), error => {
    onDirCreated(error, demoName);
  });
}

init(process.argv[2]);

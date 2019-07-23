var fs = require("fs-extra");

fs.copy('src/js', 'public/js', function (err) {
   if (err) return console.error(err)
});

fs.copy('src/html', 'public', function (err) {
   if (err) return console.error(err)
});
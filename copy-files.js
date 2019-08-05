const path = require('path');
const fs = require('fs');

const includes = [];
const includePath = path.join(__dirname, 'src/includes');
const directoryPath = path.join(__dirname, 'src/html');
const jsPath = path.join(__dirname, 'src/js');
const publicPath = path.join(__dirname, 'public');

const includeFiles = fs.readdirSync(includePath);
includeFiles.forEach(function (file) {
   let filename = file;
   const pos = filename.lastIndexOf('.html');
   if(pos == -1) {
      return console.log('.html extension not found on include file..');
   }
   filename = filename.substr(0, pos);
   includes[filename] = fs.readFileSync(path.join(includePath, file), 'utf8');
});

// Replace include-* with contents of said include file (html)
fs.readdir(directoryPath, function (err, files) {
   if (err) {
      return console.log('Unable to scan src/html directory: ' + err);
   } 

   files.forEach(function (file) {
      // Do whatever you want to do with the file
      fs.readFile(path.join(directoryPath, file), 'utf8', function (err,data) {
         if (err) {
            return console.log(err);
         }

         let newData = data;
         const tags = [];
         const expression = /<include-(.*) \/>/g;
         while ((resultArray = expression.exec(data)) !== null) {
            const tag = resultArray[0];
            const includeFile = resultArray[1];

            if(includes[includeFile] == undefined) {
               return console.log('Trying to use an include file that is not defined: ' + includeFile);
            }
            newData = newData.replace(tag, includes[includeFile]);
         }

         fs.writeFile(path.join(publicPath, file), newData, 'utf8', function (err) {
            if (err) return console.log(err);
         });
      });
   });
});

// Copy js files
fs.readdir(jsPath, function (err, files) {
   if (err) {
      return console.log('Unable to scan src/js directory: ' + err);
   } 

   files.forEach(function (file) {
      // Do whatever you want to do with the file
      fs.copyFile(path.join(jsPath, file), path.join(publicPath + '/js/', file), (err) => {
         if (err) throw err;
       });
   });
});
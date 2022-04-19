const fs = require('fs');

fs.readFile('user-data.txt', (err, data) => {
  if (err) {
    console.log('Error reading file');
    return;
  }
  console.log(data.toString());
});

fs.writeFile('user-data.txt', 'username=Max', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File created successfully');
  }
});

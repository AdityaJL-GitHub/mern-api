const express = require('express');

const app = express();

app.use(() => {
  console.log('hello server...');
  console.log('yuhuu sangat');
})

app.listen(4000);
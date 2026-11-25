const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, '0.0.0.0', function () {
  console.log('Server running on port http://localhost:' + PORT);
});

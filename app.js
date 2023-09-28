const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });
// Handle other requests by serving the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const app = require('./api/index'); // Import Express app dari api/index.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running locally on port ${PORT}`);
});

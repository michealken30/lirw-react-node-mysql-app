const app = require('./app');
const port = process.env.PORT || 3200;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port http://0.0.0.0:${port}`);
});

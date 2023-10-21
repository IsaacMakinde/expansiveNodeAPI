const app = require('./server');
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

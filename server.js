const mongoose=require('mongoose');
const app = require('./app');

const { PORT = 3000, DB_HOST } = process.env;

mongoose.connect(DB_HOST).then(()=>{
  console.log(`Database connection successful`)

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}).catch(err=>{
  console.log(err.message);
  process.exit(1);
})


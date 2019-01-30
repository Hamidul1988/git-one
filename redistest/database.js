const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const database = new Sequelize('postgres://user:hamidul@@http://localhost/:5432/lwhh');
const Task=database.define('task',{
    description:Sequelize.STRING
});


database.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  database.sync()
  .then(
   e=>{
    console.log('Connection has been established successfullDatabsae Synced.');   
   }   
  ).catch(err => {
    console.error('scynedd filed', err);
  });
  module.exports={
    database, 
    Task    
  }

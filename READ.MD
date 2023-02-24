----DAY 1 Setting up Micro Services------
This is Amaziing Micro Services Architecture ->Mind Blowing

Sequilize ORM Object Relational Mapper

npm install -g sequelize this is RDBMS
npm install sequelize->by using this Configration is Very EASY
npm install -g sequelize-cli

This package give us Flexibility we create Database Operation Very handy way
->it give us the CLI Interface
For Example :MYSQL Command:Create database database name
using squelize:npx sequelize db:create
Before this we need Inilize Sequelize
========>npx seuelize init

it will creates a Lots Of things

and move all Folder inside of src

Seeders
if we want to store the Dummy data we use this
config.config.json

{
"development": {
"username": "root",
"password": "root",
"database": "Flight_search",
"host": "127.0.0.1",
"dialect": "mysql"
},

MYSQL2->fOR cONNECTED Database
npm install mysql2

this mysql give us the Driver to Connect the Database

==================Day 2 Start Over First Models=====================

##DB Design
->Airplane Table
->Flight table
->Airport table
->City

    ->A flight belongs to an airplane but one airplane can be used in multiple flighs
    ->A city has many Airports but one airport belongs to a city
    ->One airport can have many Flighes,but a flighs belong to one airport

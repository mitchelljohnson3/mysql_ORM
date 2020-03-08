// importing the ORM from the SAME directory
const db_orm = require('./mysql_orm.js');
const mysql = require('mysql');

// to use the ORM, first create a new object out of db_orm, 
// passing it the name of the database. Then call the init()
// function on top of it to connect to the database
const orm = new db_orm('cms_database');
orm.init();

// below are sample functions that are commented out
// uncomment the functions to test them

// ================================================================
//  this function takes the name of the table, and returns
// all the data contained within it
// ================================================================
// orm.select_all_from_one_table('department')
// .then((data) => {
//     console.log(data);
// }).then(() => {
//     orm.kill();
// });
// ================================================================

// ================================================================
// this function like the name suggests, selects all the
// data from one table where one column equald one value
// ================================================================
// orm.select_all_from_one_table_where_one_column_equals_value('employee', 'manager_id', 1)
// .then((data) => {
//     console.log(data);
// }).then(() => {
//     orm.kill();
// });
// ================================================================
// importing the ORM from the SAME directory
const db_orm = require('./mysql_orm.js');
const mysql = require('mysql');

// to use the ORM, first create a new object out of db_orm, 
// passing it the name of the database. Then call the init()
// function on top of it to connect to the database
const orm = new db_orm('cms_database');
orm.init();

// this function ends the connection to the database
// orm.kill();

// this function converts the returned queries into arrays
// it takes a boolean parameter, true to remove values, false to remove keys
// it is optional, only used if the user desires
// the 'data' variable is the response from an ORM database query
// orm.formatToArray(data, true);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// SAMPLE FUNCTIONS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// below are sample functions that are commented out that
// demonstrate the usage of this ORM
// uncomment the functions to test them

// ================================================================
// returns all data from one table
// ================================================================
// orm.select_all_from_table('department')
// .then((data) => {
//     console.log(data);
// }).then(() => {
//     orm.kill();
// });
// ================================================================

// ================================================================
// this function returns one column from the from a table
// ================================================================
// orm.select_column_from_table('first_name', 'employee')
// .then((data) => {
//     console.log(data);
// }).then(() => {
//     orm.kill();
// });
// ================================================================

// ================================================================
// returns all rows from table where one column equals a value
// ================================================================
// orm.select_all_from_table_where_column_equals_value('employee', 'manager_id', null)
// .then((data) => {
//     console.log( orm.formatToArray( (orm.filter(data, ['first_name', 'last_name']) ) ) );
// }).then(() => {
//     orm.kill();
// });
// ================================================================

// ================================================================
// this table joins two tables together on their primary keys
// ================================================================
// orm.table1_inner_join_table2_ON_table1_key_equals_table2_key('employee', 'role', 'role_id', 'id')
// .then((data) => {
//     console.log(data);
// }).then(() => {
//     orm.kill();
// });
// ================================================================

// ================================================================
// this function lets the user make a raw query to the database
// ================================================================
// orm.raw('select * from department')
// .then((data) => {
//     console.log(data);
// }).then(() => {
//     orm.kill();
// });
// ================================================================

// ================================================================
// 
// ================================================================
// ================================================================

// ================================================================
// 
// ================================================================
// ================================================================

// ================================================================
// 
// ================================================================
// ================================================================

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
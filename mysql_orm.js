// the descriptions for the functions are detailed in the 
// test_script.js file

const mysql = require('mysql');

class orm {

    // constructor creates the connection object
    // using the mysql module
    constructor(database_name) {
        this.database_name = database_name;
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            password: 'password1',
            user: 'root',
            database: this.database_name
        });
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ORM FUNCTIONALITY METHODS
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // creates connection to the database
    init() {
        this.connection.connect((err) => {
            if (err) throw err;
            console.log(`connection established with ${this.database_name}`);
        });
    }

    // kills the connection to the database
    kill() {
        console.log(`connection ended with ${this.database_name}`);
        this.connection.end();
    }

    // returns promise based query
    db_query(query, values) {
        values = values ? values : [];
        return new Promise((resolve, reject) => {
            this.connection.query(
                query,
                values,
                (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(this.format(results));
                }
            );
        });
    }

    // this method removes the 'RowDataPacket' indicator off of the objects
    // retrieved from the database
    // every query uses the function by default
    format(data) {
        return data.map(object => {
            const newObj = {};
            const keys = Object.keys(object);
            const values = Object.values(object);
            for (let i = 0; i < keys.length; i++) {
                newObj[keys[i]] = values[i];
            }
            return newObj;
        });
    }

    // this function converts the returned queries into arrays
    // it takes a boolean parameter, true to remove values, false to remove keys
    // the 'data' variable is the data returned from a query
    // it is optional, only used if the user desires to
    formatToArray(data, bool) {
        return data.map(object => {
            return bool ? Object.keys(object) : Object.values(object);
        });
    }

    // this function filters out unwanted values from queries
    // it takes an array as a parameter which contains the
    // column names that the user wants returned, all other
    // columns will be 'filtered' out by this method
    // the 'data' variable is the data returned from a query

    // NOTE! THIS FUNCTION DEPENDS ON THE QUERIES BEING IN OBJECT FORM
    // IT WILL THROW AN ERROR IF YOU USE THE formatToArray METHOD BEFORE THIS ONE
    filter(data, filterArray) {
        return data.map(object => {
            const newObj = {};
            const keys = Object.keys(object);
            const values = Object.values(object);
            for (let i = 0; i < keys.length; i++) {
                if(filterArray.includes(keys[i])) newObj[keys[i]] = values[i];
            }
            return newObj;
        });
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // QUERIES
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // user define raw query
    raw(query) {
        return this.db_query(query, null);
    }

    // all rows from table
    select_all_from_table(table_name) {
        const query = 'select * from ??';
        const values = [table_name];
        return this.db_query(query, values);
    }

    // one column from table
    select_column_from_table(column_name, table_name) {
        const query = 'select ?? from ??';
        const values = [column_name, table_name];
        return this.db_query(query, values);
    }

    // rows from table based on a columns value
    select_all_from_table_where_column_equals_value(table_name, colum_name, value) {
        const str = (value == null) ? 'is null' : '= ?';
        const query = `select * from ?? where ?? ${str}`;
        let values = [table_name, colum_name];
        if (value != null) values.push(value);
        return this.db_query(query, values);
    }

    // +++++
    // JOINS
    // +++++

    // inner join table with another table on primary key
    table1_inner_join_table2_ON_table1_key_equals_table2_key(table1_name, table2_name, table1_key, table2_key) {
        const query = 'select * from ?? inner join ?? on ??.?? = ??.??';
        const values = [table1_name, table2_name, table1_name, table1_key, table2_name, table2_key];
        return this.db_query(query, values);
    }

}

module.exports = orm;
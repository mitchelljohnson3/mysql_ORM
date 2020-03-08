// the descriptions for the functions are detailed in the 
// test_script.js file

const mysql = require('mysql');

class orm {
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
    
    init() {
        this.connection.connect((err) => {
            if(err) throw err;
            console.log(`connection established with ${this.database_name}`);
        });
    }

    kill() {
        console.log(`connection ended with ${this.database_name}`);
        this.connection.end();
    }

    select_all_from_one_table(table_name) {
        return new Promise((resolve, reject) => {
            const query = 'select * from ??';
            this.connection.query(
                query,
                [table_name],
                (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    select_all_from_one_table_where_one_column_equals_value(table_name, parameter, value) {
        return new Promise((resolve, reject) => {
            const query = 'select * from ?? where ?? = ?';
            this.connection.query(
                query,
                [table_name, parameter, value],
                (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }
}

module.exports = orm;
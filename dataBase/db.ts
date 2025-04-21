import sqlite3 from 'sqlite3';
export const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.log('Failed to connect to db: ', err.message);
    } else{
        console.log('Connected to SQLite DB.');
    }
});
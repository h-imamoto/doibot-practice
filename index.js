#!/usr/bin/env node
'use strict'

const dbNames = {
    mysql: "https://www.mysql.com/jp/",
    oracle: "http://www.oracle.com/technetwork/jp/database/enterprise-edition/overview/index.html",
    postgresql: "https://www.postgresql.jp/",
    sqlite: "https://www.sqlite.org/index.html",
    sqlserver: "https://www.microsoft.com/ja-jp/sql-server/sql-server-downloads",
    h2: "http://www.h2database.com/html/main.html"
}

if (process.argv.length !== 3) {
    console.log('\n  error: doisan [dbname]\n');
    process.exit(1);
}

console.log(dbNames[process.argv[2]] || 'Not found!!');
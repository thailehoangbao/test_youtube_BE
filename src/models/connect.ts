// yarn add sequelize mysql2 sequelize-auto

import { Sequelize } from "sequelize";

export const connect = new Sequelize('db_youtube', 'root', '1234', {
    host: "103.97.124.150",
    port: 3306,
    dialect: "mysql"
})

// yarn sequelize-auto -o src/models -d db_youtube -h localhost -u root -p 3306 -x 1234 -e mysql -l ts
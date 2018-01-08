var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "User" model that matches up with DB
var User = sequelize.define("user", {
	firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
    lastname: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    username: {
        type: Sequelize.TEXT
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    last_login: {
        type: Sequelize.DATE
    },

    institution: {
    	type: Sequelize.STRING
	},

    status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
});
// Syncs with DB
User.sync();
// Makes the User Model available for other files (will also create a table)
module.exports = User;
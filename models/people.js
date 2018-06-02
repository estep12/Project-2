module.exports = function(sequelize, DataTypes) {
    const bcrypt = require('bcrypt-nodejs');

    let People = sequelize.define("People", {
        firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [10]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_login: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
    },
    }, { 
        hooks: {
            beforeCreate: function(user) {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },
        // instanceMethods: {
        //     validPassword: function(password) {
        //         return bcrypt.compareSync(password, this.password);
        //     },
        // },
    });
    People.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    People.associate = function(models) {
        People.belongsToMany(models.Group, {
            through: 'PeopleGroups',
            // as: 'Group',
            // foreignKey: 'peopleId'
        });
    };

    return People;
};

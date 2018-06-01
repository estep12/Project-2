module.exports = function(sequelize, DataTypes) {
    var People = sequelize.define("People", {
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
    });
    People.associate = function(models) {
        People.belongsToMany(models.Group, {
            through: 'PeopleGroups',
            // as: 'Group',
            // foreignKey: 'peopleId'
        });
    };

    return People;
}
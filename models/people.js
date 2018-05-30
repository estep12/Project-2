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
    }
    });
    People.associate = function(models) {
        People.belongsToMany(models.Group, {
            through: 'PeopleGroups',
            as: 'Group',
            foreignKey: 'peopleId'
        });
    };

    return People;
}
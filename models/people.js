module.exports = function(sequelize, DataTypes) {
    var People = sequelize.define("People", {
        name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone_number: {
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
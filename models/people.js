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
            isNumeric: true
        }
    }
    });
    People.associate = function(models) {
        People.belongsTo(models.Group, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return People;
}
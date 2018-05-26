module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
        name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    organizer: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
 
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,

    },
    });
    Events.associate = function(models) {
        Events.belongsTo(models.Group, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Events;
}
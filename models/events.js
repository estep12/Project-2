module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    organizer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
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
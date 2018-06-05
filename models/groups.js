module.exports = function (sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

                len: [1]
            }
        },
        admin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [1]
            }

        }
    });
    Group.associate = function (models) {
        Group.hasMany(models.Events
        );
        Group.belongsToMany(models.People, {
            through: 'PeopleGroups'
            // as: 'People',
            // foreignKey: 'groupId'
        });
    };
    return Group;
} 
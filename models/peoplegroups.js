module.exports = function(sequelize, DataTypes) {
    var PeopleGroups = sequelize.define("PeopleGroups", {
        peopleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        groupId:  {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [1]
            }

        }
    });
    Group.belongsToMany(People, { through: PeopleGroups });
    People.belongsToMany(Group, { through: PeopleGroups });
        
    return PeopleGroups;
}
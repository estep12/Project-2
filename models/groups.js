module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin:  {
            type: DataTypes.STRING,
            allowNull: false,

        }
    });
    Group.associate = function(models) {
        Group.hasMany(models.Events, models.People, {
            onDelete: "cascade"
        });
    };
    return Group;
}
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => sequelize.define('Comment', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    content: {
        type: DataTypes.String,
        allowNull: false
    }
})
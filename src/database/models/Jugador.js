const { DataTypes, QueryTypes } = require("sequelize");
const { sequelize } = require("../database");

const Jugador = sequelize.define(
    "jugadores",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        documento: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        nombres: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        apellidos: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        fecha_nacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(15),
            allowNull: true,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        celular: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true,
        },
        pase: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        indumentaria: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

module.exports = Jugador;

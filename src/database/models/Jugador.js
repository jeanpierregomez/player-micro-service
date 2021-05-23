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
        id_equipo: {
            type: DataTypes.INTEGER,
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
        talla_sudadera: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        talla_camiseta: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        talla_pantaloneta: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        talla_zapato: {
            type: DataTypes.STRING(4),
            allowNull: false,
        },
        tipo_sangre: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        nivel_hemoglobina: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

module.exports = Jugador;

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ocCountryAttributes {
  country_id: number;
  name: string;
  iso_code_2: string;
  iso_code_3: string;
  address_format: string;
  postcode_required: number;
  status: number;
}

export type ocCountryPk = "country_id";
export type ocCountryId = ocCountry[ocCountryPk];
export type ocCountryOptionalAttributes = "country_id" | "status";
export type ocCountryCreationAttributes = Optional<ocCountryAttributes, ocCountryOptionalAttributes>;

export class ocCountry extends Model<ocCountryAttributes, ocCountryCreationAttributes> implements ocCountryAttributes {
  country_id!: number;
  name!: string;
  iso_code_2!: string;
  iso_code_3!: string;
  address_format!: string;
  postcode_required!: number;
  status!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ocCountry {
    return ocCountry.init({
    country_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    iso_code_2: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    iso_code_3: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    address_format: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    postcode_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'oc_country',
    timestamps: false,
    indexes: [
      {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "country_id" },
            ]
      },
    ]
  });
  }
}

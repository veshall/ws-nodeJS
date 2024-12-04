import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ocProductAttributes {
  product_id: number;
  model: string;
}

export type ocProductPk = 'product_id';
export type ocProductId = ocProduct[ocProductPk];
export type ocProductOptionalAttributes =
  | 'product_id'
  | 'model'

export type ocProductCreationAttributes = Optional<
  ocProductAttributes,
  ocProductOptionalAttributes
>;

export class ocProduct
  extends Model<ocProductAttributes, ocProductCreationAttributes>
  implements ocProductAttributes
{
  product_id!: number;
  model!: string;



  static initModel(sequelize: Sequelize.Sequelize): typeof ocProduct {
    return ocProduct.init(
      {
        product_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        model: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'oc_product',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'product_id' }],
          },
          {
            name: 'status',
            using: 'BTREE',
            fields: [{ name: 'status' }],
          },
          {
            name: 'url',
            using: 'BTREE',
            fields: [{ name: 'url' }],
          },
          {
            name: 'brand',
            using: 'BTREE',
            fields: [{ name: 'brand' }],
          },
        ],
      }
    );
  }
}

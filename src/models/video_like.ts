import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';
import type { video, videoId } from './video';

export interface video_likeAttributes {
  like_id: number;
  user_id?: number;
  video_id?: number;
  date_create?: Date;
  dis_like?: number;
}

export type video_likePk = "like_id";
export type video_likeId = video_like[video_likePk];
export type video_likeOptionalAttributes = "user_id" | "video_id" | "date_create" | "dis_like";
export type video_likeCreationAttributes = Optional<video_likeAttributes, video_likeOptionalAttributes>;

export class video_like extends Model<video_likeAttributes, video_likeCreationAttributes> implements video_likeAttributes {
  like_id!: number;
  user_id?: number;
  video_id?: number;
  date_create?: Date;
  dis_like?: number;

  // video_like belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // video_like belongsTo video via video_id
  video!: video;
  getVideo!: Sequelize.BelongsToGetAssociationMixin<video>;
  setVideo!: Sequelize.BelongsToSetAssociationMixin<video, videoId>;
  createVideo!: Sequelize.BelongsToCreateAssociationMixin<video>;

  static initModel(sequelize: Sequelize.Sequelize): typeof video_like {
    return video_like.init({
    like_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'video',
        key: 'video_id'
      }
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dis_like: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'video_like',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "like_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "video_id",
        using: "BTREE",
        fields: [
          { name: "video_id" },
        ]
      },
    ]
  });
  }
}

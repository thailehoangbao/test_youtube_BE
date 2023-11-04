import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';
import type { video, videoId } from './video';

export interface video_commentAttributes {
  comment_id: number;
  user_id?: number;
  video_id?: number;
  date_create?: Date;
  content?: string;
  reply_list?: string;
  timestamp?: Date;
}

export type video_commentPk = "comment_id";
export type video_commentId = video_comment[video_commentPk];
export type video_commentOptionalAttributes = "user_id" | "video_id" | "date_create" | "content" | "reply_list" | "timestamp";
export type video_commentCreationAttributes = Optional<video_commentAttributes, video_commentOptionalAttributes>;

export class video_comment extends Model<video_commentAttributes, video_commentCreationAttributes> implements video_commentAttributes {
  comment_id!: number;
  user_id?: number;
  video_id?: number;
  date_create?: Date;
  content?: string;
  reply_list?: string;
  timestamp?: Date;

  // video_comment belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // video_comment belongsTo video via video_id
  video!: video;
  getVideo!: Sequelize.BelongsToGetAssociationMixin<video>;
  setVideo!: Sequelize.BelongsToSetAssociationMixin<video, videoId>;
  createVideo!: Sequelize.BelongsToCreateAssociationMixin<video>;

  static initModel(sequelize: Sequelize.Sequelize): typeof video_comment {
    return video_comment.init({
    comment_id: {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reply_list: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'video_comment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comment_id" },
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

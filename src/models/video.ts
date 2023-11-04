import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';
import type { video_comment, video_commentId } from './video_comment';
import type { video_like, video_likeId } from './video_like';
import type { video_type, video_typeId } from './video_type';

export interface videoAttributes {
  video_id: number;
  video_name?: string;
  thumbnail?: string;
  description?: string;
  views?: number;
  source?: string;
  user_id?: number;
  type_id?: number;
}

export type videoPk = "video_id";
export type videoId = video[videoPk];
export type videoOptionalAttributes = "video_id" | "video_name" | "thumbnail" | "description" | "views" | "source" | "user_id" | "type_id";
export type videoCreationAttributes = Optional<videoAttributes, videoOptionalAttributes>;

export class video extends Model<videoAttributes, videoCreationAttributes> implements videoAttributes {
  video_id!: number;
  video_name?: string;
  thumbnail?: string;
  description?: string;
  views?: number;
  source?: string;
  user_id?: number;
  type_id?: number;

  // video belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // video hasMany video_comment via video_id
  video_comments!: video_comment[];
  getVideo_comments!: Sequelize.HasManyGetAssociationsMixin<video_comment>;
  setVideo_comments!: Sequelize.HasManySetAssociationsMixin<video_comment, video_commentId>;
  addVideo_comment!: Sequelize.HasManyAddAssociationMixin<video_comment, video_commentId>;
  addVideo_comments!: Sequelize.HasManyAddAssociationsMixin<video_comment, video_commentId>;
  createVideo_comment!: Sequelize.HasManyCreateAssociationMixin<video_comment>;
  removeVideo_comment!: Sequelize.HasManyRemoveAssociationMixin<video_comment, video_commentId>;
  removeVideo_comments!: Sequelize.HasManyRemoveAssociationsMixin<video_comment, video_commentId>;
  hasVideo_comment!: Sequelize.HasManyHasAssociationMixin<video_comment, video_commentId>;
  hasVideo_comments!: Sequelize.HasManyHasAssociationsMixin<video_comment, video_commentId>;
  countVideo_comments!: Sequelize.HasManyCountAssociationsMixin;
  // video hasMany video_like via video_id
  video_likes!: video_like[];
  getVideo_likes!: Sequelize.HasManyGetAssociationsMixin<video_like>;
  setVideo_likes!: Sequelize.HasManySetAssociationsMixin<video_like, video_likeId>;
  addVideo_like!: Sequelize.HasManyAddAssociationMixin<video_like, video_likeId>;
  addVideo_likes!: Sequelize.HasManyAddAssociationsMixin<video_like, video_likeId>;
  createVideo_like!: Sequelize.HasManyCreateAssociationMixin<video_like>;
  removeVideo_like!: Sequelize.HasManyRemoveAssociationMixin<video_like, video_likeId>;
  removeVideo_likes!: Sequelize.HasManyRemoveAssociationsMixin<video_like, video_likeId>;
  hasVideo_like!: Sequelize.HasManyHasAssociationMixin<video_like, video_likeId>;
  hasVideo_likes!: Sequelize.HasManyHasAssociationsMixin<video_like, video_likeId>;
  countVideo_likes!: Sequelize.HasManyCountAssociationsMixin;
  // video belongsTo video_type via type_id
  type!: video_type;
  getType!: Sequelize.BelongsToGetAssociationMixin<video_type>;
  setType!: Sequelize.BelongsToSetAssociationMixin<video_type, video_typeId>;
  createType!: Sequelize.BelongsToCreateAssociationMixin<video_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof video {
    return video.init({
    video_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    video_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'video_type',
        key: 'type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'video',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "video_id" },
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
        name: "type_id",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
  }
}

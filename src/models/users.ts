import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { video, videoId } from './video';
import type { video_comment, video_commentId } from './video_comment';
import type { video_like, video_likeId } from './video_like';

export interface usersAttributes {
  user_id: number;
  full_name?: string;
  email?: string;
  avatar?: string;
  pass_word?: string;
  face_app_id?: string;
  role?: string;
}

export type usersPk = "user_id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "user_id" | "full_name" | "email" | "avatar" | "pass_word" | "face_app_id" | "role";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  
  user_id!: number;
  full_name?: string;
  email?: string;
  avatar?: string;
  pass_word?: string;
  face_app_id?: string;
  role?: string;

  // users hasMany video via user_id
  videos!: video[];
  getVideos!: Sequelize.HasManyGetAssociationsMixin<video>;
  setVideos!: Sequelize.HasManySetAssociationsMixin<video, videoId>;
  addVideo!: Sequelize.HasManyAddAssociationMixin<video, videoId>;
  addVideos!: Sequelize.HasManyAddAssociationsMixin<video, videoId>;
  createVideo!: Sequelize.HasManyCreateAssociationMixin<video>;
  removeVideo!: Sequelize.HasManyRemoveAssociationMixin<video, videoId>;
  removeVideos!: Sequelize.HasManyRemoveAssociationsMixin<video, videoId>;
  hasVideo!: Sequelize.HasManyHasAssociationMixin<video, videoId>;
  hasVideos!: Sequelize.HasManyHasAssociationsMixin<video, videoId>;
  countVideos!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany video_comment via user_id
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
  // users hasMany video_like via user_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "email"
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pass_word: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    face_app_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
  }
}

import type { Sequelize } from "sequelize";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";
import { video as _video } from "./video";
import type { videoAttributes, videoCreationAttributes } from "./video";
import { video_comment as _video_comment } from "./video_comment";
import type { video_commentAttributes, video_commentCreationAttributes } from "./video_comment";
import { video_like as _video_like } from "./video_like";
import type { video_likeAttributes, video_likeCreationAttributes } from "./video_like";
import { video_type as _video_type } from "./video_type";
import type { video_typeAttributes, video_typeCreationAttributes } from "./video_type";

export {
  _users as users,
  _video as video,
  _video_comment as video_comment,
  _video_like as video_like,
  _video_type as video_type,
};

export type {
  usersAttributes,
  usersCreationAttributes,
  videoAttributes,
  videoCreationAttributes,
  video_commentAttributes,
  video_commentCreationAttributes,
  video_likeAttributes,
  video_likeCreationAttributes,
  video_typeAttributes,
  video_typeCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const users = _users.initModel(sequelize);
  const video = _video.initModel(sequelize);
  const video_comment = _video_comment.initModel(sequelize);
  const video_like = _video_like.initModel(sequelize);
  const video_type = _video_type.initModel(sequelize);

  video.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(video, { as: "videos", foreignKey: "user_id"});
  video_comment.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(video_comment, { as: "video_comments", foreignKey: "user_id"});
  video_like.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(video_like, { as: "video_likes", foreignKey: "user_id"});
  video_comment.belongsTo(video, { as: "video", foreignKey: "video_id"});
  video.hasMany(video_comment, { as: "video_comments", foreignKey: "video_id"});
  video_like.belongsTo(video, { as: "video", foreignKey: "video_id"});
  video.hasMany(video_like, { as: "video_likes", foreignKey: "video_id"});
  video.belongsTo(video_type, { as: "type", foreignKey: "type_id"});
  video_type.hasMany(video, { as: "videos", foreignKey: "type_id"});

  return {
    users: users,
    video: video,
    video_comment: video_comment,
    video_like: video_like,
    video_type: video_type,
  };
}

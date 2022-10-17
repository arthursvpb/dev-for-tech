import { Post } from './Posts';
import { Tag } from './Tags';
import { User } from './Users';

User.hasMany(Post, {
  foreignKey: 'user_id',
});
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.belongsToMany(Tag, { foreignKey: 'post_id', through: 'post_tags' });
Tag.belongsToMany(Post, { foreignKey: 'tag_id', through: 'post_tags' });

export { Post, User, Tag };

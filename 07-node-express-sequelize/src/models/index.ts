import { Post } from './Posts';
import { User } from './Users';

User.hasMany(Post, {
  foreignKey: 'user_id',
});
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

export { Post, User };

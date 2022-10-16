# ORM

## Sequelize

**Modeling**: Tell sequelize how is the database structure.

- Map all tables from a database to perform queries with JavaScript

### Relation 1:N

- One user can have many posts.
  - Create a FK on `posts` with the `user_id`

### Relation N:N

- Many posts can have many tags
  - Create a new table `Posts_Tags`
    - Both with `post_id` and `tag_id`

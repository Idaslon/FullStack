module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarder',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

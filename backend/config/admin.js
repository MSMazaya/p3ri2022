module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1d708cccc48b312454309fb8027acd22'),
  },
});

// Constants
module.exports = {
    database: {
      host: process.env.DATABASE_HOST || "localhost",
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_DB,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    },
    port: process.env.PORT || 3000    
  };
  
export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME, //postgres
    "password": process.env.POSTGRESS_PASSWORD, // 12345678
    "database": process.env.POSTGRESS_DB, //feed
    "host": process.env.POSTGRESS_HOST, // feed.cxz4jkxv8kjj.us-east-2.rds.amazonaws.com
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REGION, // us-east-2b
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET, // static-website-udacityproject
    "url": process.env.URL
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
//aws rds generate-db-auth-token --hostname feed.cxz4jkxv8kjj.us-east-2.rds.amazonaws.com
//--port 5432 --region us - east - 2b--username postgres
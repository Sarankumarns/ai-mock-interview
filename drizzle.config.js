/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url:'postgresql://ai%20mock%20db_owner:u8MehW7ltdSm@ep-rough-water-a5di0flv.us-east-2.aws.neon.tech/ai%20mock%20db?sslmode=require '
    }
};
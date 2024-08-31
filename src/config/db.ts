import { Options, Sequelize } from "sequelize";
import { tablesConnection } from "./tablesConnection";
let databaseConnection: Sequelize;

const config: Options = {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  define: {
    underscored: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

export const connectDatabase = async (dbUrl: string): Promise<void> => {
  try {
    databaseConnection = new Sequelize(dbUrl, config);
    await databaseConnection.authenticate();
    tablesConnection(databaseConnection);
    await databaseConnection.sync({ alter: true });
    console.log("Connection to database has been established successfully.".blue.underline.bold);
  } catch (error) {
    console.error("Unable to connect to the database:".red.underline.bold, error);
    throw error;
  }
};

export const disconnectDB = async (): Promise<void> => {
  try {
    await databaseConnection.close();
    console.log("Disconnected from the database.");
  } catch (error) {
    console.error("Error occurred while disconnecting from the database:", error);
    throw error;
  }
};

export const connectDB = async (dbUrl: string): Promise<void> => {
  await connectDatabase(dbUrl);
};

export { databaseConnection };

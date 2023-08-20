import "reflect-metadata"
import "dotenv/config"
import path from "path"
import { DataSource, DataSourceOptions } from "typeorm"

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "./entities/**.{js,ts}")
  const migrationsPath = path.join(__dirname, "./migrations/**.{js,ts}")

  const port = process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432

  return {
    type: "postgres",
    host: process.env.PGHOST,
    port: port,
    database: process.env.PGDATABASE,
    synchronize: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  }
}

const AppDataSource = new DataSource(setDataSourceConfig())

export default AppDataSource

import "reflect-metadata"
import "dotenv/config"
import path from "path"
import { DataSource, DataSourceOptions } from "typeorm"

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "./entities/**.{js,ts}")
  const migrationsPath = path.join(__dirname, "./migrations/**.{js,ts}")

  const port = process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432

  const isDockerCompose = process.env.DOCKER_COMPOSE

  console.log(isDockerCompose)

  if (isDockerCompose == "true") {
    console.log("aqui")
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      synchronize: false,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    }
  } else {
    console.log("Outro")
    return {
      type: "postgres",
      host: process.env.PGHOST,
      password: process.env.PGPASSWORD,
      port: port,
      database: process.env.PGDATABASE,
      synchronize: false,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    }
  }
}

const AppDataSource = new DataSource(setDataSourceConfig())

export default AppDataSource

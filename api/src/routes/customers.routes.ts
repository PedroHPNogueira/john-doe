import { Router } from "express"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { customerRequestSerializer } from "../serializers/customers.serializer"
import { createCustomerController, getCustomersController } from "../controllers/customers/customers.controllers"

const customerRouter: Router = Router()

customerRouter.post(
  "",
  ensureDataIsValidMiddleware(customerRequestSerializer),
  createCustomerController
)

customerRouter.get(
  "",
  getCustomersController
)

export default customerRouter

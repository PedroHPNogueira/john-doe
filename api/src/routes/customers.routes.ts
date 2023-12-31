import { Router } from "express"

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { customerRequestSerializer } from "../serializers/customers.serializer"
import {
  createCustomerController,
  getCustomersController,
  verifyCustomerExistsController
} from "../controllers/customers/customers.controllers"

const customerRouter: Router = Router()

customerRouter.get("", getCustomersController)
customerRouter.get("/verify", verifyCustomerExistsController)
customerRouter.post(
  "",
  ensureDataIsValidMiddleware(customerRequestSerializer),
  createCustomerController
)

export default customerRouter

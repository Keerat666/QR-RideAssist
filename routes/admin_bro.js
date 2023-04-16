const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const TripModel = require('../models/trips')
const UserModel = require('../models/users')
const DriverModel = require('../models/drivers')


AdminBro.registerAdapter(AdminBroMongoose)

const AdminBroOptions = {
    resources: [UserModel,DriverModel,TripModel]
}

console.log("Inside admin bro")

const AdminBroObj = new AdminBro(AdminBroOptions)

const router = AdminBroExpress.buildRouter(AdminBroObj)

module.exports = router;
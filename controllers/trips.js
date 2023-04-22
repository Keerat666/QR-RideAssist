//code extra business logic for users here leaving CRUD
const TripModel = require('../models/trips')
const UserModel = require('../models/users')
const DriverModel = require('../models/drivers')
const QRCode = require('qrcode')


module.exports = {
    create_trip(req, res) {
        var body = req.body;
        console.log(typeof(body),"Body")

        UserModel.findOne({
            phone_no: body.user_mobile
        }, async (err, UserModel1) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "err": err,
                    'userid': body.user_id,
                    "trip_status": false
                });
            } else {
                console.log(UserModel1);
                DriverModel.findOne({
                    _id: body.driver_id
                }, async (err, DriverModel1) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            "err": err,
                            'driver_id': body.driver_id,
                            "trip_status": false
                        });
                    } else {
                        console.log(DriverModel1);

                        body.user_details = UserModel1
                        body.driver_details = DriverModel1
                        console.log(body)
                        var modelObj = new TripModel(body);

                        modelObj
                            .save()
                            .then(result => {

                                return res.status(201).json({
                                    "data": body,
                                    "trip_status": true,
                                    "trip_id": result._id
                                });


                            }).catch(err => {
                                console.log(err)
                                res.status(500).json({
                                    error: err
                                })

                            })


                    }

                })
            };
        })
    },

    generateQR(req, res) {

        const opts = {
            errorCorrectionLevel: 'H',
            type: 'terminal',
            quality: 0.95,
            margin: 1,
            color: {
              dark: '#208698',
              light: '#FFF',
            },
          }

          QRCode.toFile('qrCode.png',"643bcd1ef464b5c513cf426a", opts).then(qrImage => {

            res.status(201).json({"status" : "QR Generated"})
          }).catch(err => {
              console.error(err)
              res.status(500).json({"status" : "QR not generated." , "error" : err})

          })
    }

    
}
var faker = require("faker");

var appRouter = function (app) {

    app.get("/", function (req, res) {
        res.status(200).send({ message: 'Welcome to our restful API. Back-end is working!' });
    });

    app.get("/contacts", function (req, res) {
        var contacts = ({
            firstName: faker.phone.firstName(),
            lastName: faker.name.lastName(),
            phoneNumber: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            adress: faker.address.state()
        });
        res.status(200).send(contacts);
    });

    app.get("/schedule/:num", function (req, res) {
        var schedules = [];
        var transportCompany = ["myTransport", "Transport PROS", "TravelTO", "Instant Arrival"];
        var num = req.params.num;
        if (isFinite(num) && num > 0) {
            for (i = 0; i <= num - 1; i++) {
                schedules.push({
                    transportCompany: transportCompany[Math.floor(Math.random() * Math.floor(4))],
                    startingPoint: faker.address.city(),
                    destination: faker.address.city(),
                    departureTime: faker.date.recent(),
                    arrivalTime: faker.date.future()
                });
            }

            res.status(200).send(schedules);

        } else {
            res.status(400).send({ message: 'invalid number supplied' });
        }

    });
}

module.exports = appRouter;
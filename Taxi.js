class Taxi {
    constructor(driverName) {

        this.driverName = driverName;
        this.drivenKm = 0;
        this.profit = 0;
        this.price = 1;
    }

    intro() {

        console.log(`Sveiki, as ${this.driverName} ir kilometro kaina su manimi yra 1.00 Eur.`)

    }

    updatePrice(newPrice) {
        this.price = newPrice;
        console.log(`${this.driverName} nustate nauja kilometro kaina - ${this.price} Eur.`)

    }

    ride(drivenKm) {

        this.drivenKm += drivenKm;

        this.profit += drivenKm * this.price

    }

    stats() {



        console.log(`${this.driverName} nuvaziavo ${this.drivenKm} km ir uzdirbo ${this.profit.toFixed(2)} Eur.`)
    }

    updatePrice(updatedPrice) {

        this.price = updatedPrice
        console.log(`${this.driverName} nustate nauja kilometro kaina - ${this.price}.`)
    }
}





module.exports = Taxi;
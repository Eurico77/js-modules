const Employee = require("./employee");
const Util = require("./util");

class Maneger extends Employee {
    #bonuses = 2000
    get bonuses () {
        return Util.formatCurrency(this.#bonuses)
    }
}

module.exports = Maneger
import db from "../db.js";

class FondController {
    async createFond (req, res) {
        const {name, region, number_of_seats, status_free} = req.body;
        const newHotel = await db.query(`INSERT INTO hotelinfo (name, category, number_of_seats, status_free) values ($1, $2, $3, $4) RETURNING *`, [name, region, number_of_seats, status_free]);
        res.json(newHotel.rows[0]);
    }
    async getFreeHotel (req, res) {
        const freeHotel = await db.query(`SELECT from number_fond`)
     }
    //  async reverseStatus () {
         
    //  }
}

export default new FondController();
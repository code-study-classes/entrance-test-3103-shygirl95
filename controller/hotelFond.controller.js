import db from "../db.js";

class FondController {
    async createHotel (req, res) {
        const {name, region} = req.body;
        const newHotel = await db.query(`INSERT INTO hotelinfo (name, region) values ($1, $2) RETURNING *`, [name, region]);
        res.json(newHotel.rows[0]);
    }
    async getFreeHotel (req, res) {
        const freeHotel = await db.query(`SELECT from number_fond `)
     }
     async reverseStatus () {
         
     }
}

export default new FondController();
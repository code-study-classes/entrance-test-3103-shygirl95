import db from "../db.js";

class HotelController {
    async createHotel (req, res) {
        const {name, region} = req.body;
        const newHotel = await db.query(`INSERT INTO hotels (name, region_id) values ($1, $2) RETURNING *`, [name, region]);
        res.json(newHotel.rows[0]);
    }
}

export default new HotelController();
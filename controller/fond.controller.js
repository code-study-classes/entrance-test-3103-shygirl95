import db from "../db.js";

class FondController {
    async createFond (req, res) {
        const {name, region, number_of_seats, status_free} = req.body;
        const newHotel = await db.query(`INSERT INTO hotelinfo (name, category, number_of_seats, status_free) values ($1, $2, $3, $4) RETURNING *`, [name, region, number_of_seats, status_free]);
        res.json(newHotel.rows[0]);
    }
    async getFreeHotel (req, res) {
        const freeHotel = await db.query(`SELECT status_free from number_fond `);
        res.json(freeHotel)
    }
    async reverseStatus (req, res) {
        const {id} = req.params;
        const result = await pool.query(`SELECT status_free FROM number_fond WHERE id = $1`, [id]);
        const currentStatus = result.rows[0].status_free;
        const newStatus = currentStatus === 'Свободен' ? 'Занят' : 'Свободен';
    
        await pool.query(`UPDATE number_fond SET status_free = $1 WHERE id = $2`, [newStatus, id]);
        res.json(newStatus);
      } 
}

export default new FondController();
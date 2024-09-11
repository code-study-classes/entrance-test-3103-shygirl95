import db from "../db.js";

class RoomController {
    async createRoom (req, res) {
        const {number, category, status_free} = req.body;
        const newHotel = await db.query(`INSERT INTO rooms (number, category, status_free) values ($1, $2, $3 ) RETURNING *`, [number, category, status_free]);
        res.json(newHotel.rows[0]);
    }
    async getFreeRoom (req, res) {
        const freeHotel = await db.query(`SELECT * FROM rooms WHERE status_free = 'Свободен'`);
        res.json(freeHotel.rows)
    }
    async reverseStatus (req, res) {
        const {id} = req.params;
        const result = await db.query(`SELECT status_free FROM rooms WHERE id = $1`, [id]);
        const currentStatus = result.rows[0].status_free;
        const newStatus = currentStatus === 'Свободен' ? 'Занят' : 'Свободен';
    
        await db.query(`UPDATE rooms SET status_free = $1 WHERE id = $2`, [newStatus, id]);
        res.json(newStatus);
      } 
}

export default new RoomController();

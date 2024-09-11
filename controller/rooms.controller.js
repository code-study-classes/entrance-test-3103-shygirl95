import db from "../db.js";

class RoomController {
    async createRoom (req, res) {
        const {number, category, number_of_seats, status_free} = req.body;
        const newHotel = await db.query(`INSERT INTO rooms (number, category, number_of_seats, status_free) values ($1, $2, $3, $4) RETURNING *`, [number, category, number_of_seats, status_free]);
        res.json(newHotel.rows[0]);
    }
    async getFreeRoom (req, res) {
        const freeHotel = await db.query(`SELECT status_free from rooms `);
        res.json(freeHotel)
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

// CREATE TABLE rooms (
//     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     number VARCHAR(10) NOT NULL,
//     category category_type NOT NULL,
//     number_of_seats INTEGER GENERATED ALWAYS AS (
//         CASE category
//             WHEN 'Стандарт' THEN 2
//             WHEN 'Люкс' THEN 2
//             WHEN 'Апартаменты' THEN 4
//         END
//     ) STORED,
//     status_free status_type DEFAULT 'Свободен' NOT NULL
// );
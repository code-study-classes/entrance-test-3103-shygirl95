import db from "../db.js"

class HotelController {
    async createPost(reg, res){
        const {title, content, userId} = reg.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId])
        res.json(newPost.rows[0])
    }
    async getPostsByUsers (reg, res){
        const id = reg.query.id
        const posts = await db.query('select * from post where user_id = $1', [id])
        res.json(posts.rows[0])
    }
}

export default new HotelController();
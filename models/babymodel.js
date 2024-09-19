const pool = require('../config/db')


exports.Selectbabyid = async (data) => { // baby_id 찾기
    const query = `SELECT baby_id from baby where baby_name = ?`;
    const [result] = await pool.query(query,data);
    console.log(result);
    return result[0].baby_id;
}
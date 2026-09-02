// Neon PostgreSQL database ko backend se connect karne ke liye 
import {neon} from '@neondatabase/serverless' //neon function import kar rahe ho.

const sql = neon(`${process.env.DATABASE_URL}`);  // is url ki help se Neon ke database se connection/query function create karta hai.

export default sql;  //sql naam ka variable ab database queries execute karne ke kaam aayega.
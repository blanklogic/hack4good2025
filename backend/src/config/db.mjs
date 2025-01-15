import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const initializeTables = async () => {
  try {
    const connection = await pool.getConnection();

    await connection.query(`
      CREATE TABLE IF NOT EXISTS vouchers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id VARCHAR(255), -- Firebase UID
        balance INT DEFAULT 100,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);

    // await connection.query(`
    //   CREATE TABLE IF NOT EXISTS transactions (
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     user_id VARCHAR(255), -- Firebase UID
    //     details TEXT,
    //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    //   );
    // `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS product_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id VARCHAR(255), -- Firebase UID
        product_id INT,
        quantity INT,
        status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS product_inventory (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL, -- Product name
        description TEXT, -- Optional product description
        price INT NOT NULL, -- Product price (voucher count)
        stock INT DEFAULT 0, -- Available stock
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Record creation timestamp
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Record update timestamp
      );
    `);

    console.log("Database tables initialized successfully.");
    connection.release();
  } catch (error) {
    console.error("Error initializing database tables:", error.message);
  }
};

initializeTables();

export default pool;

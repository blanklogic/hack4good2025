// src/services/userService.js
import admin from "../config/firebase.mjs";
import pool from "../config/db.mjs";

const auth = admin.auth();

export const createUser = async (email, password, displayName) => {
  try {
    const userRecord = await auth.createUser({
      email,
      password,
      displayName,
      emailVerified: false,
      disabled: false,
    });

    const [result] = await pool.query(
      `INSERT INTO vouchers (user_id, balance) VALUES (?, ?)`,
      [userRecord.uid, 100]
    );

    return userRecord;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const resetUserPassword = async (uid, newPassword) => {
  try {
    await auth.updateUser(uid, { password: newPassword });
  } catch (error) {
    throw new Error(`Error resetting password: ${error.message}`);
  }
};

export const deleteUser = async (uid) => {
  try {
    await auth.deleteUser(uid);

    const [result] = await pool.query(
      `DELETE FROM vouchers where user_id = ? LIMIT 1`,
      [uid]
    );
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

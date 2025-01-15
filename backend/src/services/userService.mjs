// src/services/userService.js
import auth from "../config/firebase.mjs";

// const auth = app.getAuth();

export const createUser = async (email, password, displayName) => {
  try {
    const userRecord = await auth.createUser({
      email,
      password,
      displayName,
      emailVerified: false,
      disabled: false,
    });
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
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

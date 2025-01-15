import admin from './firebase.mjs';

const auth = admin.auth();

// Sample users to create
const sampleUsers = [
  {
    email: 'user1@example.com',
    password: 'password123',
    displayName: 'User One',
  },
  {
    email: 'user2@example.com',
    password: 'password456',
    displayName: 'User Two',
  },
  {
    email: 'admin@example.com',
    password: 'admin123',
    displayName: 'Admin User',
    isAdmin: true, // Custom claim for admin
  },
];

// Function to create users
const createSampleUsers = async () => {
  try {
    for (const user of sampleUsers) {
      const userRecord = await auth.createUser({
        email: user.email,
        password: user.password,
        displayName: user.displayName,
      });

      console.log(`User created: ${userRecord.uid}`);

      // Add custom claims (e.g., for admin role)
      if (user.isAdmin) {
        await auth.setCustomUserClaims(userRecord.uid, { isAdmin: true });
        console.log(`Custom claims added for admin: ${userRecord.uid}`);
      }
    }
    console.log('Sample users created successfully.');
  } catch (error) {
    console.error('Error creating users:', error.message);
  }
};

createSampleUsers();

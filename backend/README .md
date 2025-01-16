
# **Hack4Good Backend Setup**

## **Overview**
This project is the backend for the Hack4Good system, handling Firebase Authentication, a MySQL database, and API endpoints for managing vouchers, product requests, and inventory.

---

## **Prerequisites**
Before setting up the project, ensure you have the following installed:
- **Node.js** (v16+)
- **MySQL**
- **Firebase Admin SDK** Service Account JSON file

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd <project-directory>
```

---

### **2. Install Dependencies**
Run the following command to install the required Node.js packages:
```bash
npm install
```

---

### **3. Set Up Firebase Admin SDK**
1. Obtain a Firebase Admin SDK Service Account key for your project:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Navigate to **Project Settings** > **Service Accounts**.
   - Click **Generate new private key** and download the JSON file.
2. Place the downloaded JSON file in the `src/config/` directory.
3. Update the path to your service account file in `src/config/firebase.mjs`:
   ```javascript
   import serviceAccount from './path-to-service-account-key.json' assert { type: 'json' };
   ```

---

### **4. Set Up Environment Variables**
1. Create a `.env` file in the project root directory:
   ```bash
   touch .env
   ```
2. Add the following variables to the `.env` file, replacing the values with your MySQL database credentials:
   ```plaintext
   DB_HOST=localhost          # Replace with your database host
   DB_USER=root               # Replace with your database username
   DB_PASSWORD=your_password  # Replace with your database password
   DB_NAME=hack4good          # Replace with your database name
   ```

---

### **5. Initialize the Database**
The project automatically initializes the database tables upon startup. Ensure your MySQL server is running before starting the backend.

---

### **6. Run the Backend**
Start the server:
```bash
npm run dev
```
The server will be available at `http://localhost:5000`.



---

## **Project Structure**
```
src/
├── config/
│   ├── db.mjs               # MySQL database configuration
│   ├── firebase.js          # Firebase Admin SDK configuration
├── routes/                  # API route definitions
├── services/                # Business logic for database operations
├── controllers/             # Request handler functions
```

---

## **Troubleshooting**
- **Error: Firebase Service Account JSON not found**:
  - Ensure the correct path is specified in `firebase.mjs`.
- **Database connection error**:
  - Check that your MySQL server is running and the `.env` file contains valid credentials.
- **API errors**:
  - Confirm that the necessary tables are created in the database and have valid data.

---

## **Contributors**
Feel free to contribute by submitting a pull request or reporting issues!

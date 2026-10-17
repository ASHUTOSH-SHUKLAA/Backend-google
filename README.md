# Morrow API

Express MVC API using Firebase Authentication tokens. Authentication roles are stored in Firebase custom claims and set only by Firebase Admin SDK tooling.

- `src/config/` initializes Firebase Admin.
- `src/middleware/` verifies ID tokens and enforces the admin role.
- `src/controllers/` contains profile and admin request handlers.
- `src/routes/` maps API routes to controllers.
- `scripts/set-role.js` grants or removes admin claims for a Firebase account.

Set the values in `.env.example` and configure Application Default Credentials with a Firebase service-account key before using authenticated API routes. Keep the service-account key out of source control.

The current auth/profile endpoints do not need MongoDB. Add MongoDB models when the application begins storing project, inquiry, or customer data; do not use a client-writable MongoDB role field as the authority for admin access.

require("dotenv").config();
const admin = require("firebase-admin");

async function main() {
  const [identifier, role] = process.argv.slice(2);
  if (!identifier || !["admin", "user"].includes(role)) {
    console.error("Usage: npm run set-role -- <user-uid-or-email> <admin|user>");
    process.exitCode = 1;
    return;
  }

  const options = { credential: admin.credential.applicationDefault() };
  if (process.env.FIREBASE_PROJECT_ID) options.projectId = process.env.FIREBASE_PROJECT_ID;
  admin.initializeApp(options);

  const auth = admin.auth();
  const user = identifier.includes("@")
    ? await auth.getUserByEmail(identifier)
    : await auth.getUser(identifier);
  await auth.setCustomUserClaims(user.uid, { ...user.customClaims, role });
  console.log(`Set role "${role}" for ${user.email || user.uid}. The user must refresh their ID token to receive the updated claim.`);
}

main().catch((error) => {
  console.error("Could not update Firebase user role:", error.message);
  process.exitCode = 1;
});

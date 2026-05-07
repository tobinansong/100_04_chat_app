import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  const users = await User.find({});
  console.log(`Found ${users.length} users`);

  for (const user of users) {
    const avatarUrl = `https://i.pravatar.cc/150?u=${user.email}`;
    user.profilePicture = avatarUrl;
    await user.save();
    console.log(`Updated ${user.fullName} → ${avatarUrl}`);
  }

  console.log("Done!");
  await mongoose.disconnect();
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

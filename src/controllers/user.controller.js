import { asyncHandler } from "../utils/asyncHandler.js";

// register user

export const registerUser = asyncHandler(async (req, res) => {
  // const { username, email, avatar, coverImage, password } = req.body;
  res.status(200).json({
    message: "ook",
  });
});

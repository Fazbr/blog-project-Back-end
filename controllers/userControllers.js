import User from "../models/User";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      //   return res.status(400).json({ message: "User already exists" });
      throw new Error("User already exists");
    }
    //create new user
    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try{ 

} catch{
  next(error);
}

export { registerUser };

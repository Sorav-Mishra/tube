import { User } from "../models/user.js";

const registerUser = async (req, res) => {
  const { Number, Name } = req.body;

  if (!Number || !Name) {
    return res.status(400).json({ message: "all field are required" });
  }

  const existsUser = await User.findOne({
    $or: [{ Number }, { Name }],
  });

  if (existsUser) {
    return res.status(400).json({ message: "user alresdy exit" });
  }

  const user = await User.create({
    Number,
    Name,
  });

  res.status((201).json({ message: "user create sucessfully", user }));
};

export default registerUser;

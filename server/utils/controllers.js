import { User } from "../models/users.js";
import { sendToken } from "./sendToken.js";

const handleErrorResponse = (res, message, statusCode = 500) => {
    return res.status(statusCode).json({ success: false, message });
};

export const register = async (req, res) => {
    try {
        const { userid, name, email, password, type } = req.body;
        console.log(name)
        let user = await User.findOne({ $or: [{ email }, { userid }] });

        if (user) {
            return handleErrorResponse(res, "User already exists", 400);
        }

        user = await User.create({ userid, name, email, password, type });

        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

export const login = async (req, res) => {
    try {
        const { userid, password } = req.body;

        if (!userid || !password) {
            return handleErrorResponse(res, "Please enter all fields", 400);
        }

        const user = await User.findOne({ userid }).select("+password");

        if (!user) {
            return handleErrorResponse(res, "Invalid UserID or Password", 400);
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return handleErrorResponse(res, "Invalid UserID or Password", 400);
        }

        sendToken(res, user, 200, "Login Successful");
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token").status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

export const orderpickup = async (req, res) => {
    try {
        const { title, description } = req.body;
        const user = await User.findById(req.user._id);

        user.pickups.push({ title, description, completed: false, createdAt: new Date() });

        await user.save();

        res.status(200).json({ success: true, message: "Pickup ordered successfully" });
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

export const updatepickup = async (req, res) => {
    try {
        const { pickupid } = req.params;
        const user = await User.findById(req.user._id);
        const pickup = user.pickups.find((pickup) => pickup._id.toString() === pickupid);
        if (!pickup) {
            return handleErrorResponse(res, "Pickup not found", 404);
        }
        pickup.completed = !pickup.completed;
        await user.save();
        res.status(200).json({ success: true, message: "Pickup updated successfully" });
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

export const cancelpickup = async (req, res) => {
    try {
        const { pickupid } = req.params;
        const user = await User.findById(req.user._id);
        user.pickups = user.pickups.filter(pickup => pickup._id.toString() !== pickupid);
        await user.save();
        res.status(200).json({ success: true, message: "Pickup removed successfully" });
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

export const getMyProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        sendToken(res, user, 200, `Welcome back ${user.name}`);
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        const { name, userid } = req.body;

        if (userid) {
            const existingUser = await User.findOne({ userid });

            if (existingUser && existingUser._id.toString() !== user._id.toString()) {
                return handleErrorResponse(res, "Userid is already taken", 400);
            }

            user.userid = userid;
        }

        if (name) user.name = name;
        await user.save();

        res.status(200).json({ success: true, message: "Profile updated successfully" });
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

export const updatePassword = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("+password");

        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            return handleErrorResponse(res, "Please enter all fields", 400);
        }

        const isMatch = await user.comparePassword(oldPassword);

        if (!isMatch) {
            return handleErrorResponse(res, "Invalid Old Password", 400);
        }

        user.password = newPassword;

        await user.save();

        res.status(200).json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        return handleErrorResponse(res, error.message);
    }
};

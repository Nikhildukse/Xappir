import prisma from "../Db/db.config.js";

// User Login API (Without Password Hashing)
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email and password
        const user = await prisma.user.findUnique({
            where: { email: email },
        });

        if (!user || user.password !== password) {
            return res.status(201).json({ status: 201, message: "Invalid email or password" });
        }

        return res.status(200).json({ 
            status: 200, 
            message: "Login successful", 
            user: { id: user.id, name: user.name, email: user.email } 
        });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ status: 500, message: "Server error" });
    }
};

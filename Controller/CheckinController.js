import prisma from "../Db/db.config.js";

export const createCheckin = async (req, res) => {
    try {
        const { clientname, ckeckindate, checkoutedate, guest, rooms, adharno1, adharno2 } = req.body;

        // Validate required fields
        if (!clientname || !ckeckindate || !checkoutedate || !guest || !rooms || !adharno1 || !adharno2) {
            return res.status(400).json({ status: 400, message: "All fields are required" });
        }

        // Create new check-in record
        const newCheckin = await prisma.checkin.create({
            data: {
                clientname,
                ckeckindate,  
                checkoutedate,
                guest:guest.toString(),
                rooms,
                adharno1,
                adharno2
            }
        });

        return res.json({ status: 200, data: newCheckin, message: "Check-In Successful" });

    } catch (error) {
        console.error("Error creating check-in:", error);
        return res.status(500).json({ status: 500, message: "Server Error", error: error.message });
    }
};

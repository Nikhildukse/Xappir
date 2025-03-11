import prisma from "../Db/db.config.js";


export const createUser = async (req, res) => {
    const { name, email, password , mobileno} = req.body

    const findUser = await prisma.user.findUnique({
        where: {
            email: email,
            mobileno:mobileno
        }
    })

    if (findUser) {
        return res.json({ status: 400, message: "Allready have account" })
    }

    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password,
            mobileno:mobileno,
        }
    })
    return res.json({status:200 , data:newUser , message:"Accounte Created"})
}
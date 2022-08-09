
import jwt from 'jsonwebtoken'
import UserSettings from '../Models/UserModel';
import bcrypt from 'bcrypt'



//Register UserCredentials
export const CreateUserAccount = async (req, res) => {
    try {
        // Check if this user already exisits
        let user = await UserSettings.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({
                message: "User Already Exists",
                status: false
            });
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            // Insert the new user if they do not exist yet
            user = new UserSettings({
                UserName: req.body.UserName,
                email: req.body.email,
                password: hashedPassword,
            });
            await user.save();
            res.status(200).json({
                message: "SuccessFully created",
                status: true,
                data: user

            });
        }
        //Check For Validations & Errors
    } catch (error) {
        res.status(422).json({
            message: error.message,
            status: false,
        });
    }
}
//Login Credentials
export const LoginUser = async (req, res) => {
    //validations
    const { email, password } = req.body;


    if (!email) {
        res.status(422).json({
            status: false,
            message: "Email Required"
        })
    }
    if (!password) {
        res.status(422).json({
            status: false,
            message: "Password Required"
        })
    }
    try {
        //Verification
        let users = await UserSettings.findOne({
            email: email,
        });
        const VerifyPassword = await bcrypt.compare(password, users.password)

        if (users && VerifyPassword) {
            let Token = jwt.sign({ id: users._id }, 'keyforNodereactProject')
            return res.status(200).json({
                message: "Logged in Successfully",
                status: true,
                Token: Token,
                data: users
            })
        }
        else {
            return res.status(422).json({
                message: "Invalid Credentials",
                status: false,
            });
        }
    } catch (error) {
        return res.send(error)
    }

}
// Profile details 
export const ProfileDetails = async (req, res) => {
    try {
        let user = await UserSettings.findById(req.params.id)
        if (user) {
            res.status(200).json({
                message: "Data Found",
                status: true,
                data: user
            })
        }
        else {

            res.status(422).json({
                message: "Data Not Found",
                status: false,
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error,
            status: false,
        })
    }
}
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import { randomUUID } from 'crypto';

type UserData = {
    users: {
        id: number,
        firstName: string;
        lastName: string;
        country: string;
        email: string;
        agreement: boolean;
        phone: string;
        password: string;
    }[]
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'data/db.json')
const adapter = new JSONFile<UserData>(file)
const db = new Low<UserData>(adapter)


const signup = async (req, res) => {
    await db.read()
    const user = JSON.parse(req.body)
    user.id = randomUUID()

    db.data
        .users
        .push(user)

    await db.write()
    res.status(200).json(user.id);
};


export default signup
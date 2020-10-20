import bcrypt from 'bcryptjs';


export default (password: string, userPassword: string) => bcrypt.compare(password, userPassword);

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';
import userView from '../view/User_View';

import User from '../models/User';
import { JWT_TOKEN } from '../../variable';

class UserController {
  async authentication(request: Request, response: Response) {
    const { email, password } = request.body;



    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    await schema.validate({ email, password }, { abortEarly: false });



    const repository = getRepository(User);

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    const token = jwt.sign({ id: user.id },
      JWT_TOKEN,
      { expiresIn: '1d' });

    return response.json({ user: userView.render(user), token });
  }
}

export default new UserController();

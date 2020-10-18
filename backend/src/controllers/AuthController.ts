import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';

import User from '../models/User';
import { JWT_TOKEN } from '../../variable';

class UserController {
  async authentication(request: Request, response: Response) {
    const { email, password } = request.body;

    const repository = getRepository(User);

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    const isValidPassword = bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    const token = jwt.sign({ id: user.id },
      JWT_TOKEN,
      { expiresIn: '1d' });

    return response.json({ user, token });
  }
}

export default new UserController();

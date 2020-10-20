import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';
import transporter from '../utils/transporter';

import User from '../models/User';

class UserController {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;


    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(5),
    });

    await schema.validate({ email, password }, { abortEarly: false });
    const repository = getRepository(User);

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return response.status(409).json({ error: 'Email already exists' });
    }

    const user = repository.create({ email, password });

    await repository.save(user);

    return response.json(user);
  }

  async sendMail(request: Request, response: Response) {
    const mailSend = await transporter.sendMail({

      text: 'Test send email',
      subject: 'Email subject',
      from: 'Equip Happy <Equip HAPPY>',
      to: 'matheusfilho98.ms@gmail.com',

      html: 'dwd',
    });

    console.log(mailSend);

    return response.json({ ok: true });
  }
}

export default new UserController();

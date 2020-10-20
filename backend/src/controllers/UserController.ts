import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
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
    const { email } = request.body;


    const schema = Yup.object().shape({

      email: Yup.string().email().required(),
    });
    await schema.validate({ email });


    const repository = getRepository(User);
    const emailExists = await repository.findOne({ where: { email } });

    if (!emailExists) {
      return response.json({ message: 'Email not exists' });
    }

    



    const mailSend = await transporter.sendMail({

      text: 'Test send email',
      subject: 'Email subject',
      from: 'Equip Happy <Equip HAPPY>',
      to: 'matheusfilho98.ms@gmail.com',
      
      html: `
       <header class="header">
        <h1 id="title">Happy</h1>
       </header>

       <div class="container">
        <div>
          <h1>Hello Matheus tudo bem?!</h1>

          <h2 class="pass">Segue a sua senha para acesso a plataforma:</h2>

          <h4><h4>Password: </h2><h1>1234567</h1></h2>

          <p>
            E lembre-se, senha é algo secreto, não compartilhe com ninguém! :)
          </p>
        </div>

        <span>Atenciosamente, equipe Happy</span>
       </div>
`,
    });

    

    return response.json({ ok: true });
  }
}

export default new UserController();

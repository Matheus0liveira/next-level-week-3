import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import transporter from '../utils/transporter';

import User from '../models/User';

class UserController {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;

    const resetTokenExpires = new Date();


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

    const user = repository.create({ email, password, resetTokenExpires });

    await repository.save(user);

    // return response.json(user);
  }

  async forgotPassword(request: Request, response: Response) {
    const { email } = request.body;


    const schema = Yup.object().shape({

      email: Yup.string().email().required(),
    });
    await schema.validate({ email });


    const userRepository = getRepository(User);
    const emailExists = await userRepository.findOne({ where: { email } });

    if (!emailExists) {
      return response.json({ message: 'Email not exists' });
    }

    const newPassword = crypto.randomBytes(4).toString('hex');


    await transporter.sendMail({

      subject: 'Alteração de senha',
      from: 'Equipe Happy',
      to: `${emailExists.email}`,
      
      
      html: 
      `
      <!DOCTYPE html style="margin: 0; padding: 0; box-sizing: border-box;">
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    "
  >
    <header
      class="header"
      style="
        background: #29b6d1;
        color: #ffd666;
        text-align: center;
        padding: 50px 0;
        font-size: 40;
      "
    >
      <h1 style="margin: 0">Happy</h1>
      <h1 style="color: #fff; font-size: 16px; font-weight: normal">
        Leve felcidade para o mundo
      </h1>
    </header>

    <div
      style="
        background: #b3dae2;
        height: 100%;
        margin: 0;
        padding: 50px;
        box-sizing: border-box;
      "
    >
      <div>
        <h1 style="margin: 0; color: #4d6f80">Hello, tudo bem?!</h1>

        <h1 style="color: #4d6f80; font-size: 24px; font-weight: normal">
          Segue a sua nova senha para acesso a plataforma:
        </h1>

        <p style="padding: 24px 0 40px 0">
          <strong style="font-size: 34px; color: #000; font-style: italic"
            >${newPassword}</strong
          >
        </p>
        <div
          style="height: 1px; width: 100%; background: #29b6d1; margin: 40px 0"
        ></div>

        <h1 style="font-size: 20px; color: #4d6f80">
          E lembre-se, senha é algo secreto, não compartilhe com ninguém! :)
        </h1>
        <h1
          style="
            font-style: italic;
            font-weight: lighter;
            color: #4d6f80;
            font-size: 20px;
          "
        >
          Obs: Futuramente você poderá mudar a sua senha em seu perfil
        </h1>
      </div>
      <span
        style="
          font-size: 18px;
          width: 100%;
          display: inline-block;
          text-align: right;
        "
        >Atenciosamente, equipe Happy</span
      >
    </div>
  </body>
</html>

      `,
    }).then(
      async () => {
        const password = await bcrypt.hash(newPassword, 10);

 
        const dataUpdate = {
          email: emailExists.email,
          password,
        };

        const { id } = emailExists;

        const update = await userRepository.update({ id }, dataUpdate);
        console.log(update);

        return response.status(200).json({ message: 'Email sended' });
      },
    );

    

    return response.json({ ok: true });
  }
}

export default new UserController();

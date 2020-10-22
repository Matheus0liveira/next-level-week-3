import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import UserView from '../view/User_View';
import transporter from '../utils/transporter';

import User from '../models/User';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(5),
    });

    await schema.validate({ name, email, password }, { abortEarly: false });
    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({ where: { email } });

    if (userExists) {
      return response.status(409).json({ error: 'Email already exists' });
    }

    const user = userRepository.create({ name, email, password });

    await userRepository.save(user);

    return response.json(UserView.render(user));
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


    const token = crypto.randomBytes(20).toString('hex');     

    const dateNow = new Date().getHours() + 1; 

    const { id } = emailExists;
    

    const dataUpdate = {

      resetToken: token,
      resetTokenExpires: String(dateNow),

    };


    await userRepository.update({ id }, dataUpdate);

    
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
        Leve felicidade para o mundo
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
          <a href="http://localhost:3000/restrict/edit_password/${token}">
            Clique aqui</a
          >
          para redefinir sua senha!
        </h1>

        <p style="padding: 24px 0 40px 0"></p>
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
    });
    

    

    return response.sendStatus(200);
  }

  async resetPassword(request: Request, response: Response) {
    const { email, password } = request.body;



    const schema = Yup.object().shape({

      email: Yup.string().email().required(),
      password: Yup.string().required().min(5),
    });

    await schema.validate({ email, password }, { abortEarly: false });

    const { token } = request.params;

    const userRepository = getRepository(User);

    if (!token) {
      return response.status(404).json({ message: 'Token not provider' });
    }


    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      return response.status(404).json({ message: 'User not exists' });
    }

    if (token !== user.resetToken) {
      return response.status(408).json({ message: 'Tokens not match' });
    }
    const { id } = user;

    const nowHour = new Date().getHours(); 
    if (Number(user.resetTokenExpires) < nowHour) {
      const data = {
        resetToken: '',
        resetTokenExpires: '',

      };
      await userRepository.update({ id }, data);
      return response.json({ message: 'Token expired' });
    }

    const newPassword = await bcrypt.hash(password, 10);

    const data = {
      email: user.email,
      password: newPassword,
      resetToken: '',
      resetTokenExpires: '',

    };

    await userRepository.update({ id }, data);

    const userUpdated = await userRepository.findOne({ where: { id } });

    if (!userUpdated) {
      return;
    }

    return response.status(200).json(UserView.render(userUpdated));
  }
}

export default new UserController();

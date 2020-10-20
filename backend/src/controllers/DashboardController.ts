import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanage';
import User from '../models/User';


class DashBoardController {
  // various records
  // async inex();


  // unique recorder
  // show()

  // update record
  // update()

  // delete record
  async delete(request: Request, response: Response) {
    const { userId } = request;

    const { id } = request.params;

    const orphanageRepository = getRepository(Orphanage);
    const userRepository = getRepository(User);
    if (!userId) {
      return response.status(402).json({ message: 'Id not provider' });
    }
    
    const schema = Yup.object().shape({
      
      id: Yup.string().uuid().required(),
    });
    
    await schema.validate({ id }, { abortEarly: false });
    
    
    const existsOrphanage = await orphanageRepository.findOne(id);
    const existsEmail = await userRepository.findOne({ where: { id: userId } });

    
    if (!existsEmail) {
      return response.status(402).json({ message: 'Email not exists' });
    }


    if (!existsOrphanage) {
      return response.status(402).json({ message: 'Orphanage not exists' });
    }

    await orphanageRepository.remove(existsOrphanage);

    return response.sendStatus(200);
  }
}

export default new DashBoardController();

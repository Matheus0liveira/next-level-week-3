import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanage';
import User from '../models/User';


class DashBoardController {
  // various records
  async index(request: Request, response: Response) {
    const { option } = request.query;


    const orphanageRepository = getRepository(Orphanage);

    if (option === 'pending') {
      const pendingOrphanages = await orphanageRepository.find({ where: { pending: true } });


      return response.status(202).json(pendingOrphanages);
    }



    if (option === 'registred') {
      const registredOrphanages = await orphanageRepository.find({ where: { pending: false } });


      return response.status(202).json(registredOrphanages);
    }



    if (!option) {
      return response.status(400).json({ message: 'required to send a pending or registered in query param' });
    }
  }


  // unique recorder
  // show()

  // update record
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const {

      name,
      latitude,
      longitude,
      about,
      instructions,
      phone,
      markerMap,
      pending,
      opening_hours,
      open_on_weekends,

    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const resquestImages = request.files as Express.Multer.File[];

    
    const images = resquestImages.map((image) => ({
      path: image.filename,
    }));  



    const data = {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      phone,
      markerMap,
      pending,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };



    const schema = Yup.object().shape({
      id: Yup.string().uuid().required(),
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      phone: Yup.string().required(),
      markerMap: Yup.string().required(),
      pending: Yup.bool().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),

    });

    await schema.validate(data, {
      abortEarly: false,
    });


    if (!id) {
      return response.status(400).json({ message: 'orphanageId is required' });
    }


    const orphanage = await orphanagesRepository.findOne({
      where: { id },
      relations: ['images'],
    });

    
    
    if (!orphanage) {
      return response.status(400).json({ message: 'orphanageId not exists' });
    }
    
    const dataUpdate = {

      name: name || orphanage.name,
      latitude: latitude || orphanage.latitude,
      longitude: longitude || orphanage.longitude,
      about: about || orphanage.about,
      instructions: instructions || orphanage.instructions,
      phone: phone || orphanage.phone,
      markerMap: markerMap || orphanage.markerMap,
      pending: pending === 'true',
      opening_hours: opening_hours || orphanage.opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,

    };

    
    orphanagesRepository.merge(orphanage, dataUpdate);

    const results = await orphanagesRepository.save(orphanage);


    return response.status(202).json(results);
  }





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
      return response.status(404).json({ message: 'Email not exists' });
    }


    if (!existsOrphanage) {
      return response.status(404).json({ message: 'Orphanage not exists' });
    }

    await orphanageRepository.remove(existsOrphanage);

    return response.sendStatus(200);
  }
}

export default new DashBoardController();

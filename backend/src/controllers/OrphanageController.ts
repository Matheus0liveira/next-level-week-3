import { Request, Response } from 'express';

import * as Yup from 'yup';

import { getRepository } from 'typeorm';

import orphanageView from '../view/Orphanages_view';

import Orphanage from '../models/Orphanage';

class OrphanageController {
  async index(request: Request, response: Response) { 
    const orphanagesRepository = getRepository(Orphanage);


    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
      where: { pending: false },
    });


    if (!orphanages) {
      return response.json({ message: 'Not found' });
    }
    

    return response.json(orphanageView.renderMany(orphanages));
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;


    if (!id) {
      return response.status(400).json({ message: 'Id is required' });
    }


    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOne({
      relations: ['images'],
      where: { id },
    });

    if (!orphanage) {
      return response.status(400).json({ message: 'orphanage not exists' });
    }


    console.log(orphanage.images);


    return response.json(orphanageView.render(orphanage));
  }


  async create(request: Request, response: Response) {
    const {

      name,
      latitude,
      longitude,
      about,
      instructions,
      phone,
      markerMap,
      opening_hours,
      open_on_weekends,

    } = request.body;


   

    const orphanagesRepository = getRepository(Orphanage);

    const resquestImages = request.files as Express.Multer.File[];

    const images = resquestImages.map((image) => ({
      path: image.filename,
    }));


    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      phone,
      markerMap,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      phone: Yup.string().required(),
      markerMap: Yup.string().required(),
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

    const orphanages = orphanagesRepository.create(data);


    console.log(orphanages);

    await orphanagesRepository.save(orphanages);


    response.status(201).json(orphanages);
  }
}

export default new OrphanageController();

import { Request, Response } from 'express';

import * as Yup from 'yup';

import { getRepository } from 'typeorm';

import ophanargeView from '../view/Orphanages_view';

import Orphanage from '../models/Orphanage';

export default {

  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.json(ophanargeView.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(ophanargeView.render(orphanages));
  },

  async create(request: Request, response: Response) {
    const {

      name,
      latitude,
      longitude,
      about,
      instructions,
      phone,
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

    const test = await orphanagesRepository.save(orphanages);

    console.log(test);
    response.status(201).json(orphanages);
  },
};

import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../../variable';

interface TokenPayLoad {

  id :string;
  iat: number;
  exp: number;
}

const authMiddleWare = (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ Error: 'Unauthorized' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, JWT_TOKEN);

    console.log(data);

    const { id } = data as TokenPayLoad;

    request.userId = id;

    next();
  } catch {
    return response.status(401).json({ Error: 'Unauthorized' });
  }
};

export default authMiddleWare;

import config from 'config';

export const JWT_SECRET = config.get('JWTSecret.secret')
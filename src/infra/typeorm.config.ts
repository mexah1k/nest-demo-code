require('dotenv').config();

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Ticket } from '../tickets/entities/ticket.entity';

export const applicationDatabase: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_APPLICATION_HOST,
  port: Number.parseInt(process.env.TYPEORM_APPLICATION_PORT),
  username: process.env.TYPEORM_APPLICATION_USERNAME,
  password: process.env.TYPEORM_APPLICATION_PASSWORD,
  database: process.env.TYPEORM_APPLICATION_DATABASE,
  synchronize: true, // for prod setup false and add migrations
  entities: [
    Ticket
  ],
};

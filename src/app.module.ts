import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // To load environment variables
import { UsersModule } from './users/users.module'; // Example of a users module

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env file globally
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true, // Automatically load entities from the modules
      synchronize: process.env.SYNCHRONIZE === 'true', // Sync database schema in dev
    }),
    UsersModule, // Example module
  ],
})
export class AppModule {}

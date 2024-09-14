import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigRegisterName } from 'src/shared/constants/config-register-name.constant';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get(`${ConfigRegisterName.database}.host`),
        port: configService.get(`${ConfigRegisterName.database}.port`),
        username: 'postgres',
        password: configService.get(`${ConfigRegisterName.database}.password`),
        database: configService.get(
          `${ConfigRegisterName.database}.databaseName`,
        ),
        synchronize: configService.get(
          `${ConfigRegisterName.database}.synchronize`,
        ),
        autoLoadEntities: configService.get(
          `${ConfigRegisterName.database}.autoLoadEntities`,
        ),
      }),
    }),
  ],
})
export class DatabaseModule {}

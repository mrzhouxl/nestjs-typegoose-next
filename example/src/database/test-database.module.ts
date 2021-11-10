import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose-next';
import { MongoMemoryServer } from 'mongodb-memory-server';

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory: async () => {
        const mongod = new MongoMemoryServer();
        return {
          //@ts-ignore
          uri: await mongod.getConnectionString(),
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        };
      },
    }),
  ],
})
export class TestDatabaseModule {}

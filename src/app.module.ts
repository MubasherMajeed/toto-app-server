import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from "./common/db/db.module";
import { PersonsModule } from "./Module/persons/persons.module";

@Module({
  imports: [DbModule,PersonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

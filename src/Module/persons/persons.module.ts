import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Person, PersonSchema } from "../../data/schemas/person.schema";

@Module({
  imports:[MongooseModule.forFeature([{name:Person.name,schema:PersonSchema}])],
  controllers: [PersonsController],
  providers: [PersonsService]
})
export class PersonsModule {}

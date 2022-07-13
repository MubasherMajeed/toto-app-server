import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Person, PersonDocument } from "../../data/schemas/person.schema";
import { Model } from "mongoose";

@Injectable()
export class PersonsService {

  constructor(@InjectModel(Person.name) private readonly model:Model<PersonDocument>) {
  }


  async fetch(id?: string) {
    if (id == null) {
      return this.model.find().exec();
    }
    return this.model.findOne({ _id: id }).exec();
  }

  async search(name: string) {

    return this.model.find({ $or: [{ name: { $regex: name }  }] }).exec();
  }

  async create(data: any) {
    return this.model.create(data);
  }

  update(id: string, data: any) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}

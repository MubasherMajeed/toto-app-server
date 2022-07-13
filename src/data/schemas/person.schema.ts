import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type PersonDocument = Document & Person;

@Schema({ timestamps: true })
export class Person {

  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  phone: string;

}

export const PersonSchema = SchemaFactory.createForClass(Person);

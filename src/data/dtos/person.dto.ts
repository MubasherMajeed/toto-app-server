import { ApiProperty, PartialType } from "@nestjs/swagger";


export class PersonDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;

}

export class PersonResponseDto extends PartialType(PersonDto) {
  @ApiProperty()
  _id: string;
}

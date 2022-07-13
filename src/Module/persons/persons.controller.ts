import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post } from "@nestjs/common";
import { Person } from "../../data/schemas/person.schema";
import { PersonsService } from "./persons.service";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PersonDto, PersonResponseDto } from "../../data/dtos/person.dto";

@ApiTags("Persons")
@Controller('persons')
export class PersonsController {

  constructor(private readonly service: PersonsService) {
  }


  @ApiOkResponse({ type: [PersonResponseDto], description: "All Attribute" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get()
  async fetchAll(){
    return this.service.fetch();
  }

  @ApiOkResponse({ type: [PersonResponseDto], description: "Search By name and values of Attribute" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/search/:query")
  async search(@Param("query")query:string){
    return this.service.search(query);
  }


  @ApiOkResponse({ type: PersonResponseDto, description: "Attribute with id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/:id")
  async fetchOne(@Param("id") id:string){
    return this.service.fetch(id);
  }



  @ApiCreatedResponse({ type: PersonResponseDto, description: "Attribute Created Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({
    type: PersonDto
  })
  @Post()
  async createNew(@Body() data:any){
    return this.service.create(data);
  }


  @ApiCreatedResponse({ type: PersonResponseDto, description: "Attribute Updated Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @Patch("/:id")
  @ApiBody({type:PersonDto})
  async updateOne(@Param("id") id:string,@Body() data:any){
    return this.service.update(id,data);
  }


  @ApiOkResponse({ description: "Attribute Deleted successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Delete("/:id")
  async delete(@Param("id") id:string){
    await this.service.delete(id);
  }

}

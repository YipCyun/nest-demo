import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNumber, IsString, IsUUID } from 'class-validator';
import { Item } from '../../models/item.entity';

export class ItemDTO implements Readonly<ItemDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;


  @ApiModelProperty({ required: true })
  @IsString()
  name: string;

  @ApiModelProperty({ required: true })
  @IsNumber()
  age: number;

  @ApiModelProperty({ required: true })
  @IsString()
  description: string;

  public static from(dto: Partial<ItemDTO>) {
    const it = new ItemDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.age = dto.age;
    it.description = dto.description;
    return it;
  }

  public static fromEntity(entity: Item) {
    return this.from({
      id: entity.id,
      name: entity.name,
      age: entity.age,
      description: entity.description
    });
  }

  public toEntity() {
    const it = new Item();
    it.id = this.id;
    it.name = this.name;
    it.age = this.age;
    it.description = this.description;
    it.createDateTime = new Date();
    return it;
  }
}
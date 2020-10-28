import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDTO } from './dto/item.dto';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) { }

  @Get()
  public async getAll(): Promise<ItemDTO[]> {
    return await this.itemService.getAll();
  }

  @Post()
  public async post(@Body() dto: ItemDTO): Promise<ItemDTO> {
    return this.itemService.create(dto);
  }
}

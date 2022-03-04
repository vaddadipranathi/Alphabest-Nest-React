import { Test, TestingModule } from '@nestjs/testing';
import { AlphabtesController } from './alphabtes.controller';

describe('AlphabtesController', () => {
  let controller: AlphabtesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlphabtesController],
    }).compile();

    controller = module.get<AlphabtesController>(AlphabtesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

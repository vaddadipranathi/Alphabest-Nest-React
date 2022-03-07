import { Test, TestingModule } from '@nestjs/testing';
import { AlphabetController } from './alphabtes.controller';

describe('AlphabetController', () => {
  let controller: AlphabetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlphabetController],
    }).compile();

    controller = module.get<AlphabetController>(AlphabetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

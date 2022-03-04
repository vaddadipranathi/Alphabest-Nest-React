import { Test, TestingModule } from '@nestjs/testing';
import { AlphabtesService } from './alphabtes.service';

describe('AlphabtesService', () => {
  let service: AlphabtesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlphabtesService],
    }).compile();

    service = module.get<AlphabtesService>(AlphabtesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Alphabet } from 'src/entitys/alphabets.entity';
import { AlphabetService } from './alphabtes.service';

describe('AlphabetService', () => {
  let alphaService: AlphabetService;
  let fakeAlphaService: AlphabetService;
  let fakeObj: any;

  beforeEach(async () => {
    // fakeAlphaService = {
    //   find: () => Promise.resolve([]),
    // };
    const appServiceTest: TestingModule = await Test.createTestingModule({
      providers: [
        AlphabetService,
        {
          provide: getRepositoryToken(Alphabet),
          useValue: fakeObj,
        },
      ],
    }).compile();
    alphaService = appServiceTest.get<AlphabetService>(AlphabetService);
  });
  it('should be defined', () => {
    expect(alphaService).toBeDefined();
  });

  it('getTaskById', () => {
    fakeObj = {
      id: 1,
      alphabet: 'Task A',
      status: true,
    };
    expect(alphaService.getTaskById('Task A')).toEqual(fakeObj);
  });
});

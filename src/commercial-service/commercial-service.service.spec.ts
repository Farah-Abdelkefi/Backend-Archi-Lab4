import { Test, TestingModule } from '@nestjs/testing';
import { CommercialServiceService } from './commercial-service.service';

describe('CommercialServiceService', () => {
  let service: CommercialServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommercialServiceService],
    }).compile();

    service = module.get<CommercialServiceService>(CommercialServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

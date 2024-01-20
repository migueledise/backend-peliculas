import { Test, TestingModule } from '@nestjs/testing';
import { SyncMoviesService } from './sync_movies.service';

describe('SyncMoviesService', () => {
  let service: SyncMoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyncMoviesService],
    }).compile();

    service = module.get<SyncMoviesService>(SyncMoviesService);
  });

  it('debería ejecutar la tarea programada', () => {
    jest.spyOn(console, 'log'); // Espiar la función console.log

    service.manejarTareaProgramada();

    expect(console.log).toHaveBeenCalledWith('Tarea programada ejecutada.');
  });
});



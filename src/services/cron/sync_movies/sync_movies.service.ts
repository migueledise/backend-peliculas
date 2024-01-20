import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SyncMoviesService {
    @Cron('* * * * *') // Ejecutar todos los días a la medianoche
    manejarTareaProgramada() {
      console.log('Tarea programada ejecutada.');
      // Lógica de la tarea programada aquí
    }
}

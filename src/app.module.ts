import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { SyncMoviesService } from './services/cron/sync_movies/sync_movies.service';

@Module({
  imports: [
    ScheduleModule.forRoot(), 
  ],
  controllers: [AppController],
  providers: [AppService, SyncMoviesService],
})
export class AppModule {}

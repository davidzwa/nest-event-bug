import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from "@nestjs/event-emitter";

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
      verboseMemoryLeak: true,
      ignoreErrors: false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

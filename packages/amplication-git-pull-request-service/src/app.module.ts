import { AmplicationLoggerModule } from "@amplication/util/nestjs/logging";
import { Module, OnApplicationShutdown } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DiffModule } from "./diff/diff.module";
import { PullRequestModule } from "./pull-request/pull-request.module";

@Module({
  imports: [
    DiffModule,
    PullRequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env.local", ".env"],
    }),
    AmplicationLoggerModule.forRoot({
      serviceName: "amplication-git-pull-request-service",
    }),
  ],
})
export class AppModule implements OnApplicationShutdown {
  onApplicationShutdown(signal: string) {
    console.trace(`Application shut down (signal: ${signal})`);
  }
}

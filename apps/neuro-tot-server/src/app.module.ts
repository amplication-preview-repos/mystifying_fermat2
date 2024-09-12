import { Module } from "@nestjs/common";
import { MindfulnessComponentModule } from "./mindfulnessComponent/mindfulnessComponent.module";
import { PatternModule } from "./pattern/pattern.module";
import { UiElementModule } from "./uiElement/uiElement.module";
import { SubjectModule } from "./subject/subject.module";
import { MessageModule } from "./message/message.module";
import { TutoringSessionModule } from "./tutoringSession/tutoringSession.module";
import { TutorModule } from "./tutor/tutor.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    MindfulnessComponentModule,
    PatternModule,
    UiElementModule,
    SubjectModule,
    MessageModule,
    TutoringSessionModule,
    TutorModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
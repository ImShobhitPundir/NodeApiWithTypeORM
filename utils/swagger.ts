import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../package.json";


const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.n",
    info: {
      title: "REST API Documentation",
      summary: "REST API Documentation",
      description: " This API documentation, describes the endpoints, request data, responses, and other details of an API in a API description format.",
      termsOfService: "https://spundir.in",
      contact: {
        name: "API Support - SP Developer",
        url: "https://spundir.in/",
        email: "er.shobhitpundir@gmail.com"
      },
      version,
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Devlopment"
      }
    ],
    schemes: ["https", "http"],
    components: {
      securitySchemes: {
          bearerAuth: {
              type: "http",
              scheme: "bearer",
          },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/api-routes.ts", "./schema/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
  // Swagger page hide schemas in this
  //app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {swaggerOptions: { defaultModelsExpandDepth: -1 }, customSiteTitle : "API Doc | AASAAN", customfavIcon: "http://1.6.10.113:3000/favicon/favicon.png" }));

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customSiteTitle : "API Doc", customfavIcon: "" }));

  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  //log.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
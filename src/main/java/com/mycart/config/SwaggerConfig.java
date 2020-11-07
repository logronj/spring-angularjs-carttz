package com.mycart.config;

import java.util.Collections;
import org.springframework.context.annotation.*;
import springfox.documentation.builders.*;
import springfox.documentation.service.ApiKey;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
  @Bean
  public Docket api() {
    return new Docket(DocumentationType.SWAGGER_2).select()
        .apis(RequestHandlerSelectors.basePackage("com.mycart.api"))
        .paths(PathSelectors.any()).build().securitySchemes(Collections.singletonList(apiKey()));
  }

  private ApiKey apiKey() {
    return new ApiKey("Authorization", "Authorization", "header");
  }
}

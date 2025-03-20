package com.wipro.proxy_gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient  // ✅ Registers this service to Eureka
public class ProxyGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProxyGatewayApplication.class, args);
    }
}

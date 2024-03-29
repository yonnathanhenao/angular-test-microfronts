Native Federation Testing for Angular Microfrontends
====================================================

This project delves into the advanced implementation of microfrontends using Angular 17, coupled with the power of Native Federation. Its primary purpose is to demonstrate the viability and best practices for building a robust and scalable microfrontend architecture.

Getting Started
---------------

Developed with Angular 17, this project serves as a testing ground for integrating multiple microfrontends into a cohesive application.

### Development Server

To start the development server for the root:

`ng serve root`

For the authentication microfrontend, run:

`ng serve authentication`

Navigate to [http://localhost:4200/](http://localhost:4200/) to see the root in action. Each microfrontend will be served on its respective route, demonstrating effective integration and isolation among them.

### Project Structure

The project is primarily divided into two parts:

*   **Root**: The main entry point coordinating the loading and presentation of microfrontends.
    
*   **Authentication**: A microfrontend dedicated to authentication functionality, showcasing the capability to develop, test, and deploy features independently within the broader ecosystem.
    

### Building the Project

To build any part of the project, use:

`ng build root` or `ng build authentication`

This will compile the source code and store the build artifacts in the **dist/** directory.

### More Information

This project is a starting point for those interested in the microfrontend architecture with Angular.
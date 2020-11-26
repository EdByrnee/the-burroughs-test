![The Burroughs test](https://www.uidownload.com/files/10/345/301/hand-drawn-game-controller-thumb.jpg)
# The Burroughs Test

This project demonstrate the following key features of good practice:

  - :book: Documentation
	- This api is FULLY documented using OpenApi, you can read the docs at http://localhost:3333/api (see api section below)
	- All of the endpoints are full documented along with full schema and examples of the http responses you might receive, and description of the endpoints etc.
- :pencil2: Design
	- Modularization - code is organised by feature module e.g. all code relating to employees is in the `EmployeeModule`
	- Separation of business logic and application logic - controllers (the routes) hold the business logic, and all the application logic is stored within the services e.g. `PaymentService.getLastWorkingDayOfMonth()`

- :space_invader: Testing
	- Unit Tests implemented, was sure to include all sunny and rainy cases
	- Pure functions, - All functions have a predictable input and output, and can be unit tested in isolation


- :bulb: Deployment & Extra
	- Example Dockerfile included to show familiarity with Docker

##### Future Work
Of course a lot was left out, future work for the api would include:
- e2e tests
- Added functionality
-  Decouple api from feature modules

## Start the application
`nx serve --project=api` Start the api, http://localhost:3333/api

`nx serve` Start the frontend, http://localhost:4200

## Run the tests
`nx test --project=api` (Starts the unit tests on the api)
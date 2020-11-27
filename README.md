![The Burroughs test](https://news.xbox.com/en-us/wp-content/uploads/sites/2/win_g_OOBE_Xenon.gif?resize=940%2C528)

# The Burroughs Test

This project demonstrate the following key features of good practice:

- :book: Documentation
	- This api is documented using OPEN API, you can read the docs at http://localhost:3333/api (see api section below)
	- All of the endpoints are fully documented along with full schema and examples of the http responses you might receive, and description of the endpoints etc.
	
- :pencil2: Design
	- Modularization - code is organissed by feature module e.g. all code relating to employees is in the `EmployeeModule`
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
- Decouple api from feature modules
- All the obvious stuff, db migrations, demo data etc.

## Start the application
`nx serve --project=api` Start the api, http://localhost:3333/api

`nx serve` Start the frontend, http://localhost:4200

#### (First you must configure!)
1. `apps\api\.env` Here is the env file, add your database credentials here
2. Browse to `http://localhost:3333`, here you can make an employee with a salary in the admin panel
3. You can now start the frontend and view employee PAYE at `http://localhost:4200`

(I would have made a sqlite db, but I wanted to showcase admin-bro panel)

## Run the tests
`nx test --project=api` (Starts the unit tests on the api)
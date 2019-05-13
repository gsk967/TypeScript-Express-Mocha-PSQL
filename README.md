# TypeScript-Express-Mocha-PSQL

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [PostgreSQL](https://www.postgresql.org/download/linux/ubuntu/)


# Getting started
- Clone the repository
```
git clone https://github.com/gsk967/TypeScript-Express-Mocha-PSQL.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```

- PostgreSQL Credentials 
  - please update the config files in config folder
  - please change the credentials according to your system
  - please check the below config
  ```
   {
   	"NODE_ENV": "development",
   	"APP_NAME": "TypeScript and express and psql",
   	"HOST": "localhost",
   	"PORT": 3000,
   	"API_URL": "http://localhost:3000",
   	"WEB_URL": "https://localhost:8000",
   	"DB": {
   		"HOST": "localhost",
   		"PORT": 5432,
   		"USERNAME": "<PSQL_USERNAME>",
   		"PASSWORD": "<PSQL_PASSWORD>",
   		"DATABASE": "<PSQL_DATABASE>"
   	}
   }

   ```

- Insert Default data into PSQL
```
npm run prescript
```

- Build and run the project
```
npm run build
npm start
```

- Run the project in different Envs
```
# Development
export NODE_ENV=development
npm run dev
```
- Testing project
```
export NODE_ENV=testing
npm run test
```


- tslint 
```
npm run tslint
```
- tslint fixing 
```
npm run tslint-fix
```

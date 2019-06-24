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
# LICENSE
MIT License

Copyright (c) 2019 SaiKumar Gangi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

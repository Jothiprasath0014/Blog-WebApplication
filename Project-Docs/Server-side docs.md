# Server-Side 

### To Install Dependencies

```
npm i 

or

npm install
```

## Necessary NPM Packages or Dependencies

Body-parser => [Body-parser](https://www.npmjs.com/package/body-parser).

EJS (Embedded Javascript => [ejs](https://www.npmjs.com/package/ejs).

Express => [express](https://www.npmjs.com/package/express).



### Necessary Import's

```
import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
```

###### App and Port Setting
```
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
```

###### Setting body-parser 

```
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));
```


###### To start the server 

```
nodemon server.js 

or

node server.js
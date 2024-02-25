import express from 'express';
import exphbs from 'express-handelbars';
import cookieParser from 'cookie-parser';
import { urlencoded } from 'body-parser';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.listen(3000);
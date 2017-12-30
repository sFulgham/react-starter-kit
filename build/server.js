import express from 'express';
import config from './config';
import chalk from 'chalk';
import reactApp from './reactApp';

/* eslint-disable no-console */

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const appRender = reactApp();
  res.render('index', {appRender});
});

app.set('view engine', 'ejs');

app.listen(config.port, (err) => {
  if(err){
    console.info(chalk.red(`An error has occurred listening on port ${config.port}`)); 
    return;
  }

  console.info(chalk.green(`Application running on port ${config.port}`)); 
});
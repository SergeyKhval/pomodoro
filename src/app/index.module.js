import {config} from './index.config';
import {run} from './index.run';
import {MainController} from './main/main.controller';

angular.module('pomodoro', ['toastr'])
  .config(config)
  .run(run)
  .controller('MainController', MainController);

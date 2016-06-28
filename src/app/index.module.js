import {config} from './index.config';
import {MainController} from './main/main.controller';

angular.module('pomodoro', ['toastr'])
  .config(config)
  .controller('MainController', MainController);

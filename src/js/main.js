import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../index.html';
import '../css/main.scss';

import Button from './Button';


$().ready(() => {
  const $button1 = new Button();
  const $button2 = new Button('danger');

  const $buttons = $('<div>')
    .append($button1.render())
    .append($button2.render());

  $('#app')
    .append($('<div>').html('This is Jquery Webpack'))
    .append($buttons);
});

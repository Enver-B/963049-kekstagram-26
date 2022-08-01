//import {postDesription} from './data.js';
import './picture.js';
import './bigpicture.js';
import './popap.js';
import './form.js';
import './scale.js';
import './slider.js';
import './api.js';
import {renderPictureList} from './picture.js';
import {setUserFormSubmit} from './form.js';
import {closeUserModal} from './popap.js';
import {getData} from './api.js';
// eslint-disable-next-line no-console
//console.log(postDesription());

getData((pictureData) => {
  renderPictureList(pictureData);
});


setUserFormSubmit(closeUserModal);

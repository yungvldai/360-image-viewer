
import create360Viewer from '360-image-viewer';
import canvasFit from 'canvas-fit';

import './styles.scss';

const root = document.querySelector('#root');
const image = new Image();

const params = new URLSearchParams(window.location.search);
const path = params.get('path');

image.src = path;

image.onload = function () {
  const viewer = create360Viewer({
    image
  });
  root.appendChild(viewer.canvas);
  const fit = canvasFit(viewer.canvas, window, window.devicePixelRatio);
  window.addEventListener('resize', fit, false);
  fit();
  viewer.start();
};

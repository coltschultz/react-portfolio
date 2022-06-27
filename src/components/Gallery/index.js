import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">My Work</h1>
      <p>A small selection of some of the things I coded along the way.</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;

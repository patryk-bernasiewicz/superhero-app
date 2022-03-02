import { Superhero } from '@interfaces/superhero.interface';

import styles from './Image.module.scss';

interface ImageProps {
  name: Superhero['name'];
  image: Superhero['images'];
}

export const Image = ({ name, image: { xs, sx, md, lg } }: ImageProps) => {
  return (
    <img
      className={styles.image}
      src="http://placehold.jp/480x480.png"
      srcSet={`${xs} 32w,
        ${sx} 160w,
        ${md} 320w,
        ${lg} 480w`}
      alt={`${name} images`}
    />
  );
};

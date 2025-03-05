import { ImageElement } from '@/types/projectTypes';
import styles from './Image.module.scss';

const ImageComponent = ({
  img,
  desc,
  width = 50,
  height = 50,
}: ImageElement) => (
  <img
    className={styles.image}
    src={img}
    alt={desc}
    width={width}
    height={height}
  />
);

export default ImageComponent;

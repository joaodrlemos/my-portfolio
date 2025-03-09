import { ImageElement } from '@/types/projectTypes';
import React, { memo } from 'react';
import styles from './ImageComponent.module.scss';

const ImageComponent: React.FC<ImageElement> = ({
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

export default memo(ImageComponent);

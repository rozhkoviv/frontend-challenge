import { memo, useEffect, useMemo, useState } from 'react'
import query from '../helper/query.helper';
import { v4 as uuid } from 'uuid';


import ImageWithPlaceholder from './image/ImageWIthPlaceholder';

const ImageCustom = memo(ImageWithPlaceholder);

export type ImageInfo = {
  id: string;
  url: string;
  height: number;
  width: number;
  favourite: boolean;
}

export default function MainPage () {

  const [loadingState, setLoadingState] = useState(false);
  const [images, setImages] = useState<ImageInfo[]>([]);

  const renderImages = () => images.map(image => 
    <ImageCustom image={image} key={uuid()}/>
  )
  const imagesRendered = useMemo(renderImages, [images]);

  const loadImages = () => {
    setLoadingState(true);
    const params = new URLSearchParams();
    params.append('limit', '24');
    params.append('size', 'small');
    params.append('page', (images.length / 24).toString());
    query('images/search', params).then(res => res.json()).then((cats) => setImages(images.concat(cats))).then(() => setLoadingState(false));
  }

  useEffect(() => {
   loadImages();
  }, []);

  const onPageScrolling = (event: any) => {
    if (event.target.scrollTopMax === event.target.scrollTop && !loadingState) {
      loadImages();
    }
  }

  return(
    <div className='main-page' onScroll={onPageScrolling}>
      <div className='cats-container'>
        {imagesRendered}
      </div>
      {(loadingState)?<div className='loader'>Загружаем еще котиков...</div>:null}
    </div>
  )
}
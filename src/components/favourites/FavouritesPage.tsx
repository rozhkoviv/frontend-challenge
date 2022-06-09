import { memo, useEffect, useMemo, useState } from 'react';
import ImageWithPlaceholder from '../image/ImageWIthPlaceholder';
import { ImageInfo } from '../Main.page';
import { v4 as uuid } from 'uuid';
import { favStorage } from '../../helper/localStorage.helper';

const ImageCustom = memo(ImageWithPlaceholder);

export default function FavouritesPage () {

  const [images, setImages] = useState<ImageInfo[]>(favStorage.getFavourites());

  useEffect(() => {
    favStorage.onChange(() => setImages(favStorage.getFavourites()));
  }, []);

  const renderImages = () => images.map(image => 
    <ImageCustom image={image} key={uuid()}/>
  )
  const imagesRendered = useMemo(renderImages, [images]);

  return(
    <div className='main-page'>
      <div className='cats-container'>
        {imagesRendered}
      </div>
    </div>
  )
}
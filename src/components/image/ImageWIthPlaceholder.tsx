import { useEffect, useState } from 'react'
import { ImageInfo } from '../Main.page'

import placeholder from '../../assets/placeholder.png';
import { favStorage } from '../../helper/localStorage.helper';

const useImageLoader = (url: string) => {
  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = url;
    image.onload = () => setImg(url);
  }, [url]);

  return img;
}

export default function ImageWithPlaceholder (props: { image: ImageInfo }) {

  const [isFav, setIsFav] = useState(favStorage.isFavourite(props.image));

  const imageLoaded = useImageLoader(props.image.url);

  const heartOnClick = () => {
    favStorage.addOrRemove(props.image);
    setIsFav(favStorage.isFavourite(props.image));
  }

  return(
    <div className='img-card'>
      <div className='img-card-cat' style={{ backgroundImage: `url(${imageLoaded || placeholder})`}}>
        <div className={isFav?'img-card-heart img-card-heart-loved':'img-card-heart'} onClick={heartOnClick} />
      </div>
    </div>
  )
}
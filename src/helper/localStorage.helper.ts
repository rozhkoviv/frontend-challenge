import EventEmitter from 'events';
import { ImageInfo } from '../components/Main.page';

class FavouriteStorage {
  eventEmitter = new EventEmitter();

  subscribe(event: string, func: () => any): void {
    this.eventEmitter.addListener(event, func);
  }

  onChange(func: () => any): void {
    this.subscribe('change', func);
  }

  addOrRemove(img: ImageInfo): void {
    if (this.isFavourite(img))
      localStorage.removeItem(img.url);
    else
      localStorage.setItem(img.url, JSON.stringify(img));

    this.eventEmitter.emit('change');
  }

  isFavourite(img: ImageInfo): boolean {
    return !!localStorage.getItem(img.url);
  } 

  getFavourites(): ImageInfo[] {
    const favs: ImageInfo[] = [];
    for( let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const imageInfo = localStorage.getItem(key);
        if (imageInfo) favs.push(JSON.parse(imageInfo));
      }
    }
    return favs;
  }
}

export const favStorage = new FavouriteStorage();

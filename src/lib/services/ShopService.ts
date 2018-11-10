import { PetService } from './PetService';
import { singleton, service } from '@e2/web';


@service()
export class ShopService {
  
  constructor() {
    console.log('创建了ShopService')
  }
  
  @singleton()
  Pets: PetService;
  
  public getAddress() {
    return '软件孵化器，西安，中国'
  }
  
  public getAllPets() {
    return this.Pets.getAllPets();
  }
}

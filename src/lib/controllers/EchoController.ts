import { controller, method, singleton } from '@e2/web';
import { MyController } from '../controller';
import { MyContext } from '../context';
import { ShopService } from '../services/ShopService';

@controller('/api')
export class EchoController extends MyController {
  
  constructor(app:any) {
    super(app);
    console.log('创建了 EchoController')
  }
  
  @singleton()
  Shop: ShopService;
  
  @method('GET', '/version')
  async getVersion(ctx: MyContext) {
    return ctx.settings.VERSION;
  }
  
  @method('GET', '/address')
  async getAddress(ctx: MyContext) {
    const Shop = await ctx.resolve(ShopService, true);
    return Shop.getAddress();
  }
  
  @method('GET', '/pets')
  async getPets(ctx: MyContext) {
    return this.Shop.getAllPets();
  }
  
  
}


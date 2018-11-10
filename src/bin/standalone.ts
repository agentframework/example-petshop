import { WebServerContext, HttpListener } from '@e2/web';
import { MyApplication } from '../lib/application';
import { MyApplicationSettings } from '../conf/settings';
import { KoaServer } from '@e2/web-adapter-koa';

// Create a Koa server
//    using WebotApplication and WebotApplicationSettings
//    listen with HttpListener

WebServerContext.create(KoaServer)
  .with(MyApplication, MyApplicationSettings)
  .listen(HttpListener);

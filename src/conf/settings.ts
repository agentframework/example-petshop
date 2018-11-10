import { WebApplicationSettings, conf } from '@e2/web';

export class MyApplicationSettings extends WebApplicationSettings {
  @conf()
  SOME_APP_KEY_ID: string;
}

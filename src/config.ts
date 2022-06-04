import {PlatformConfig} from 'homebridge';

export interface AmbientWeatherPlatformConfig extends PlatformConfig {
  apiKey: string;
  applicationKey: string;
}

import {InjectionToken, Provider, Type} from "@angular/core";

export interface IToasterConfigService {
    getTitle(): string;
}

export const TOASTER_CONFIG_SERVICE = new InjectionToken<IToasterConfigService>('TOASTER_CONFIG_SERVICE');

export function provideConfigService(service: Type<IToasterConfigService>): Provider {
    return {
        provide: TOASTER_CONFIG_SERVICE,
        useClass: service,
    }
}
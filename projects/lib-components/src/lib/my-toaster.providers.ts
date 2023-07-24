import {InjectionToken, Provider} from "@angular/core";

export const TOASTER_DEFAULT_TITLE = new InjectionToken<string>('TOASTER_DEFAULT_TITLE');

export function provideDefaultTitle(title: string): Provider {
    return {
        provide: TOASTER_DEFAULT_TITLE,
        useValue: title,
    }
}
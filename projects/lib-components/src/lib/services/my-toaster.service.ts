import {ApplicationRef, createComponent, DestroyRef, inject, Injectable, reflectComponentType} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {MyToasterComponent} from "../components/my-toaster.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class MyToasterService {
    document = inject(DOCUMENT);
    applicationRef = inject(ApplicationRef);
    destroyRef = inject(DestroyRef);

    toast(description: string, title?: string) {
        const hostElement = this.createHostElement();

        const componentRef = createComponent(MyToasterComponent, {
            hostElement,
            environmentInjector: this.applicationRef.injector,
        });
        componentRef.setInput('description', description);

        if (title) {
            componentRef.setInput('title', title);
        }

        componentRef.instance.closeOutput
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => componentRef.destroy());

        this.applicationRef.attachView(componentRef.hostView);
    }

    private createHostElement() {
        const componentMetadata = reflectComponentType(MyToasterComponent);
        const hostElement = this.document.createElement(componentMetadata!.selector);

        const bodyElement = this.document.querySelector('body') as HTMLBodyElement;
        bodyElement.appendChild(hostElement);

        return hostElement;
    }
}
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JnKuaiGouApplicationSharedLibsModule,
  JnKuaiGouApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JnKuaiGouApplicationSharedLibsModule, JnKuaiGouApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JnKuaiGouApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JnKuaiGouApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JnKuaiGouApplicationSharedModule
    };
  }
}

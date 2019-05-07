import { NgModule } from '@angular/core';

import { JnKuaiGouApplicationSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JnKuaiGouApplicationSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JnKuaiGouApplicationSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JnKuaiGouApplicationSharedCommonModule {}

import { NgModule } from "@angular/core";

import { HeaderModule } from "./Components/Header/header.module";

@NgModule({
    imports: [
        HeaderModule,
    ],
    exports: [
        HeaderModule,
    ]
})
export class CoreModule {}
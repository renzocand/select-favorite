import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MgrSelectFavoritoComponent } from "./mgr-select-favorito.component";
import { NgSelectModule, NgSelectConfig } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MgrSelectFavoritoComponent],
  imports: [CommonModule, NgSelectModule, FormsModule],
  exports: [MgrSelectFavoritoComponent],
  providers: [
    {
      provide: NgSelectConfig,
      useValue: {
        notFoundText: "NO ENCONTRADO",
        loadingText: "CARGANDO",
      },
    },
  ],
})
export class MgrSelectFavoritoModule {}

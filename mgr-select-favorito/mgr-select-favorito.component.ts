import { Component, Input, forwardRef, SimpleChanges } from "@angular/core";
import {
  FavoriteSelect,
  DataFavoriteSelect,
} from "./mgr-select-favorito.interface";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "mgr-select-favorito",
  templateUrl: "./mgr-select-favorito.component.html",
  styleUrls: ["./mgr-select-favorito.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MgrSelectFavoritoComponent),
      multi: true,
    },
  ],
})
export class MgrSelectFavoritoComponent {
  @Input("data_favorite_select") dataDb: DataFavoriteSelect[];
  @Input() color_icono: string;
  @Input() clase_icono: string;

  data: FavoriteSelect[] = [];

  value: string;
  isDisabled: boolean;

  onChange = (_: any) => {};
  onTouch = () => {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataDb) {
      const valor = changes.dataDb.currentValue || [];
      if (valor.length == 0) {
        this.data = [];
        return;
      }
      this.data = valor.map(({ codigo, descripcion, flag_favorito }) => {
        let icono_clase = null;
        if (flag_favorito == 1) {
          icono_clase = this.clase_icono;
        }
        return {
          codigo,
          descripcion,
          icono_clase,
          color_icono: this.color_icono,
        };
      });
    }
  }

  onInput(value: any) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any) {
    if (value) {
      this.value = value || "";
    } else {
      this.value = "";
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}

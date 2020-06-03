export interface DataFavoriteSelect {
    codigo:        number;
    descripcion:   string;
    flag_favorito: number;
}


/**
 * icono_clase: Es la clase de FontAwesome que tendra el icono
 */
export interface FavoriteSelect {
    codigo:        number;
    descripcion:   string;
    icono_clase: string | null;
    color_icono?: string ;
}

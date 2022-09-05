import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[ //aqui van modulos!!
        CommonModule // aplicaciones de angular como el for e if 
    ]
})
export class HeroesModule {

}
import { Component, OnInit, Inject, ElementRef, Renderer2 , ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  @ViewChild('link', {static: true} ) myButton: ElementRef;

  constructor( @Inject(DOCUMENT) private _document, private renderer: Renderer2  ) { }

  ngOnInit() {
  }


  cambiarColor( tema: string, link: ElementRef ){

    this.aplicarCheck( link );
     
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    
  }

  aplicarCheck( link: ElementRef ){
    const selectors = this._document.getElementsByClassName('selector');
    for (const ref of selectors) {
      //ref.classList.remove('working');
      ref.renderer.removeClass(this.myButton.nativeElement, "working");
    }
    //this.renderer.addClass( link, 'working' );
      //selectors.addClass(this.myButton.nativeElement, "working");
    
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.scss']
})
export class BodyComponentComponent implements OnInit {

  juegos=[]; 
  @ViewChild('iframefz',{static:false}) iframe : ElementRef;
  // string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor() { }

  ngOnInit() {
    this.juegos = [
      {name:'Barcelona.S.C vs C.S.Emelec',country:'Ecuador',hour:'17:30'},
      {name:'Barcelona vs Real Madrid',country:'España',hour:'10:30'},
      {name:'Osasuna vs Valencia',country:'España',hour:'13:00'},
      {name:'Deportivo pasto vs Cali',country:'Colombia',hour:'16:30'},
    ];
    // var iframe = document.getElementById("iframe-fz");
  }
  
  iframeLoad(){
    console.log('crado');
    
    var elmnt = this.iframe.nativeElement.contentDocument.getElementById('Overlay');
      elmnt.style.display = "none";
    
  }

}

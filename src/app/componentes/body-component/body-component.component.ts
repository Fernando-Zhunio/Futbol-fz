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
      {img_local:'https://www.jea.com/cdn/images/avatar/avatar-alt.svg',img_visited:'https://www.jea.com/cdn/images/avatar/avatar-alt.svg',deport:'futbol',name_local:'Barcelona.S.C',name_visited:'C.S.Emelec',country:'Ecuador',hour:'17:30'},
      {img_local:'https://www.jea.com/cdn/images/avatar/avatar-alt.svg',img_visited:'https://www.jea.com/cdn/images/avatar/avatar-alt.svg',deport:'futbol',name_local:'Barcelona',name_visited:'Real Madrid',country:'España',hour:'10:30'},
      {img_local:'https://www.jea.com/cdn/images/avatar/avatar-alt.svg',img_visited:'https://www.jea.com/cdn/images/avatar/avatar-alt.svg',deport:'futbol',name_local:'Osasuna',name_visited:'Valencia',country:'España',hour:'13:00'},
      {img_local:'https://www.jea.com/cdn/images/avatar/avatar-alt.svg',img_visited:'https://www.jea.com/cdn/images/avatar/avatar-alt.svg',deport:'futbol',name_local:'Deportivo pasto',name_visited:'Cali',country:'Colombia',hour:'16:30'},
    ];
    // var iframe = document.getElementById("iframe-fz");
  }
  
  iframeLoad(){
    console.log('crado');
    
    var elmnt = this.iframe.nativeElement.contentDocument.getElementById('Overlay');
      elmnt.style.display = "none";
    
  }

}

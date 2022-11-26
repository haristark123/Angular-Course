import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  showButton = false
  serverStatus = "Server Not started"
  serverName= "Server Startted"
  show=false
  inputValue=""
  constructor() {
    setTimeout(()=>{
      this.showButton = true
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(status:any){
    this.serverStatus = status
  
  }
  onSetServer(event:any){
    this.serverName = event.target.value
  }
  showStatue(){
    this.show=true
  }
}

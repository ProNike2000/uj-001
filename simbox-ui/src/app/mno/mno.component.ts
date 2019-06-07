import { Component, OnInit } from '@angular/core';
import { MnoListService } from '../service/mno-list.service';
import { MenuItem } from 'primeng/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { MNO } from './MNO';

@Component({
  selector: 'app-mno',
  templateUrl: './mno.component.html',
  styleUrls: ['./mno.component.css']
})
export class MnoComponent implements OnInit {

  Mno:MNO[];
  selectedMno:MNO[];
  items: MenuItem[];

  constructor(private sList:MnoListService,private messageService: MessageService) { }

  ngOnInit() {
    let id = 'simbox1';
    this.sList.getMnoList().then(data=>this.Mno = data);
    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => console.log("view", event,this.selectedMno) },
      { label: 'Delete', icon: 'pi pi-times', command: (event) => console.log("delete", event, this.selectedMno) }
  ];
  }

  onClick(event, Mno){
    console.log("On click",event,Mno);
    alert("We click on Dongle: "+Mno.id);
  }

}

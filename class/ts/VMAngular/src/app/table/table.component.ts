import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  customers =[
    {custId:101, custName:'varun', salary:10000, custDOB: '12-5-2000', custImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDSSbMe5rKYcnSCWG9S_xHhbDKvyBqbxe9pJg_ydIPL6U_BynPunMRVpFA_3NbeHKE38&usqp=CAU'},
    {custId:102, custName:'rithwin', salary:20000, custDOB: '9-6-2001', custImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDSSbMe5rKYcnSCWG9S_xHhbDKvyBqbxe9pJg_ydIPL6U_BynPunMRVpFA_3NbeHKE38&usqp=CAU'},
    {custId:103, custName:'naveen', salary:30000, custDOB: '4-7-2002', custImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDSSbMe5rKYcnSCWG9S_xHhbDKvyBqbxe9pJg_ydIPL6U_BynPunMRVpFA_3NbeHKE38&usqp=CAU'  }
  ]
 

}

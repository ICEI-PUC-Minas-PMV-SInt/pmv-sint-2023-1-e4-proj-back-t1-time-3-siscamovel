import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from 'src/app/models/admins.model';
import { AdminService } from 'src/app/services/admin/gerenciar/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class CadastrarAdminComponent implements OnInit {

  cadastrarAdminRequest: Admins = {
    id: '',
    nomeadmin: '',
    siscamail: '',
  }

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

  }

  adicionarAdmin() {
    this.adminService.cadastrarAdmin(this.cadastrarAdminRequest)
    .subscribe({
      next:() => {
        this.router.navigate(['admin/gerenciar/admin']);
      }
    })
  }  
}

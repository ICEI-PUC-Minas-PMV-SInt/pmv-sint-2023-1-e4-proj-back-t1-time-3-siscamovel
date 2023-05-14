import { Component, OnInit } from '@angular/core';
import { Admins } from 'src/app/models/admins.model';
import { AdminService } from 'src/app/services/admin/gerenciar/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class AdminComponent implements OnInit {

  admins: Admins[] = [];

  buscaTexto = '';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getObterTodosAdmins()
    .subscribe({
      next: (admins) => {
        this.admins = admins;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}

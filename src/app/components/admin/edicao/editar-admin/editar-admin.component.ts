import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admins } from 'src/app/models/admins.model';
import { AdminService } from 'src/app/services/admin/gerenciar/admin.service';

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.css']
})
export class EditarAdminComponent implements OnInit {

  detalhesAdmin: Admins = {
    id: '',
    nomeadmin: '',
    siscamail: '',
  }

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (parametros) => {
        const id = parametros.get('id');

        if (id) {
          this.adminService.getObterAdmin(id)
          .subscribe({
            next: (response) => {
              this.detalhesAdmin = response;
            }
          })
        }
      }
    })
  }

  editarAdmin() {
    this.adminService.atualizarInfoAdmin(this.detalhesAdmin.id, this.detalhesAdmin)
    .subscribe({
      // response
      next: () => {
        this.router.navigate(['admin/gerenciar/admin']);
      }
    })
  }

  excluirAdmin(id: string) {
    this.adminService.excluirAdmin(id).subscribe({
      // response
      next: () => {
        this.router.navigate(['admin/gerenciar/admin']);
      }
    })
  }
}


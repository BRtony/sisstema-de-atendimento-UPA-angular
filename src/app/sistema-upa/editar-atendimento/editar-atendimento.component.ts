import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Upa, UpaService } from '../shared';

@Component({
  selector: 'app-editar-atendimento',
  templateUrl: './editar-atendimento.component.html',
  styleUrls: ['./editar-atendimento.component.css']
})
export class EditarAtendimentoComponent implements OnInit {
  addressForm = this.fb.group({
    company: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    priority: ['normal', Validators.required],
    sintomas: [null, Validators.required],
    observacoes: null
  });
  hasUnitNumber = false;
  companies = [
    {name: 'Rua dos Alfeneiros, 4, Little Whinging', abbreviation: 'U04'},
    {name: 'Rua dos Alfeneiros, 3, Little Whinging', abbreviation: 'U03'},
    {name: 'Rua dos Alfeneiros, 2, Little Whinging', abbreviation: 'U02'},
    {name: 'Rua dos Alfeneiros, 1, Little Whinging', abbreviation: 'U01'},
  ]
  states = [
    { abbreviation: 'AC', name: 'Acre' },
    { abbreviation: 'AL', name: 'Alagoas' },
    { abbreviation: 'AP', name: 'Amapá' },
    { abbreviation: 'AM', name: 'Amazonas' },
    { abbreviation: 'BA', name: 'Bahia' },
    { abbreviation: 'CE', name: 'Ceará' },
    { abbreviation: 'DF', name: 'Distrito Federal' },
    { abbreviation: 'ES', name: 'Espírito Santo' },
    { abbreviation: 'GO', name: 'Goías' },
    { abbreviation: 'MA', name: 'Maranhão' },
    { abbreviation: 'MT', name: 'Mato Grosso' },
    { abbreviation: 'MS', name: 'Mato Grosso do Sul' },
    { abbreviation: 'MG', name: 'Minas Gerais' },
    { abbreviation: 'PA', name: 'Pará' },
    { abbreviation: 'PB', name: 'Paraíba' },
    { abbreviation: 'PR', name: 'Paraná' },
    { abbreviation: 'PE', name: 'Pernambuco' },
    { abbreviation: 'PI', name: 'Piauí' },
    { abbreviation: 'RJ', name: 'Rio de Janeiro' },
    { abbreviation: 'RN', name: 'Rio Grande do Norte' },
    { abbreviation: 'RS', name: 'Rio Grande do Sul' },
    { abbreviation: 'RO', name: 'Rondônia' },
    { abbreviation: 'RR', name: 'Roraíma' },
    { abbreviation: 'SC', name: 'Santa Catarina' },
    { abbreviation: 'SP', name: 'São Paulo' },
    { abbreviation: 'SE', name: 'Sergipe' },
    { abbreviation: 'TO', name: 'Tocantins' },
    ];

  @ViewChild('formAtd', {static: true}) formAtd: NgForm;
    atendimento: Upa;

  constructor(
    private fb: FormBuilder,
    private upaService: UpaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.atendimento = this.upaService.buscarPorId(id);
  }
  atualizar(): void {
    if (this.formAtd.form.valid) {
      this.upaService.atualizar(this.atendimento);
      this.router.navigate(['/atendimento'])
    }
  }

}

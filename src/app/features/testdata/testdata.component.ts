import { Component } from '@angular/core';
import { TestdataService } from '../../core/services/testdata.service';
import { Testdata } from '../../core/models/testdata.model';

@Component({
  selector: 'app-testdata',
  imports: [],
  templateUrl: './testdata.component.html',
  styleUrl: './testdata.component.css'
})
export class TestdataComponent {
  testdataList: Testdata[] = [];

  constructor(private testdataService: TestdataService) { }

  ngOnInit(): void {
    this.testdataService.getAll().subscribe(data => {
      this.testdataList = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from 'src/services/export-excel.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-survey-analysis',
  templateUrl: './survey-analysis.component.html',
  styleUrls: ['./survey-analysis.component.css']
})
export class SurveyAnalysisComponent implements OnInit {

  constructor(private excelService : ExportExcelService) { }

  ngOnInit(): void {

  }
  download(){
    this.excelService.
    downloadFile().
    subscribe(Blob => saveAs(Blob, "response.xlsx"))
  }

}


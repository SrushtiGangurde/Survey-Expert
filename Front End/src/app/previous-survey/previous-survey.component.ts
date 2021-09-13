import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { survey } from 'src/model/survey';
import { ExportExcelService } from 'src/services/export-excel.service';
import { ViewSurveysService } from 'src/services/view-surveys.service';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import { Survey } from '../create-survey/data-models';

@Component({
  selector: 'app-previous-survey',
  templateUrl: './previous-survey.component.html',
  styleUrls: ['./previous-survey.component.css']
})
export class PreviousSurveyComponent implements OnInit {

  /* surveys = {
    name : '',
    description :'',
  } */
  survey_ids: any;
  surveys : any[] = [];
  public errorMsg: any;
  survey_id = 0;
  text;

  constructor(private _view: ViewSurveysService,
    private _route:ActivatedRoute,
    private clipboardService: ClipboardService,
    private snack:MatSnackBar,
    private excelService : ExportExcelService) { }





  ngOnInit() {

    this.survey_id=this._route.snapshot.params.sid;


    console.log("IDD");
    console.log(this.survey_id);

    // alert(this.survey_id);

    this._view.getSurveys().subscribe(
      (data:any) => {
        this.surveys = data;
        console.log(this.surveys);

      },
      (error) => {
        console.log(error);
      }
    );
  }




  
  copyContent(surveyid,sname) {

    console.log("Inside copy",surveyid);


    this.text="http://localhost:4200/giveSurvey/"+surveyid+"/"+sname;

    this.clipboardService.copyFromContent(this.text)
    // this.snack.open(" Link  Copied!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
    Swal.fire({
      title: 'Link Copied!',
    })
  }



  download(surveyid){

    this.excelService.generateResponseId(surveyid).subscribe(
      (data) => {
        console.log("Data Object ", data);
          var k = Object.keys(data);

          console.log("Array Size: ", k.length);

          const responseIds=[];

          for(let i = 0; i < k.length; i++){

            console.log("inside generateResponseid responseid: ",data[i].response_id);

            responseIds.push(data[i].response_id);

          }
          console.log("response id length : ",responseIds.length);

          this.excelService.
          downloadFile(responseIds).
          subscribe(Blob => saveAs(Blob, "response.xlsx"))
      },
    );

    Swal.fire({
      title: 'File Exported!',
    })
  }
}

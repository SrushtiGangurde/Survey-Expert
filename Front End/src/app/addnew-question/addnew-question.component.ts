import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddQuestionService } from 'src/services/add-question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addnew-question',
  templateUrl: './addnew-question.component.html',
  styleUrls: ['./addnew-question.component.css']
})
export class AddnewQuestionComponent implements OnInit {

  question ={ 
    quiz: {},
    content :'',
    type :'',
    option1 :'',
    option2 :'',
    option3 :'',
    option4 :'',
  }
  
  constructor(private _question:AddQuestionService,private snack:MatSnackBar) { }

  ngOnInit() {
  }


  addQuestion(){
    console.log(this.question);

    if(this.question.content == '' || this.question.content == null){
      // alert('username is required!');
      this.snack.open(" Name is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      return;
    }
    if(this.question.type == '' || this.question.type == null){
      // alert('username is required!');
      this.snack.open(" Description is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      return;
    }
    //call server
    this._question.addQuestion(this.question).subscribe(
    (success)=>{
      Swal.fire('Success','Survey Added Succesfully','success')
    },
    (error)=>{
      Swal.fire('Error','Error while adding Survey','error')
      console.log(error);
    }
    );
  }


  
}

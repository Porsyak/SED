import {Component, EventEmitter, Output} from '@angular/core';
import {TaskDescription, TaskStatusType, TaskUser} from "../../../models/task/task.model";
import {TaskService} from "../../../services/task.service";
import {AccountService} from "../../../services/accountService";
import {User} from "../../../models/account/user.model";
import {NotificationService} from "../../../services/notification.service";
import {FileUploader, FileUploaderOptions} from "ng2-file-upload";
import {AuthenticationService} from "../../../services/authService";
import {ApiRouteConstants, BaseApiUrl} from "../../../bootstrap/app.route.constants";
import {forEach} from "@angular/router/src/utils/collection";
import {FileDescription} from "../../../models/file/file.model";
import {FileService} from "../../../services/file.service";

@Component({
    selector: 'new-task-desc',
    templateUrl: './newTaskDesc.component.html'
})

export class NewTaskDescComponent {
    public _uploader: FileUploader;
    public planDate: Date;
    public _fileOptions: FileUploaderOptions;
    public myFiles: File[];
    public maxFileSize:number = 1000*1000*10;
    public localTD: TaskDescription;
    public _foundedUsers: User[];
    public _show: boolean = false;
    public _isCreate: boolean = true;
    public _title: string = '';
    // ↓ Это нужно для работы enum во вью.
    TaskStatusType = TaskStatusType;

    // возвращаем результат
    @Output() onCreateNew: EventEmitter<any> = new EventEmitter();

    constructor(private taskService: TaskService,
                private accountService: AccountService,
                private notificationService: NotificationService,
                private authService: AuthenticationService,
                private fileService: FileService) {
    }

    ngOnInit(): void {
        this.localTD = new TaskDescription();
        this.myFiles = [];
        this._fileOptions = {
            url:"",
            maxFileSize: 50 * 1000 * 1000,
            headers: [
                { name: 'Authorization', value: this.authService.getToken() }
            ]
        };
        this._uploader = new FileUploader(this._fileOptions);
    }

    public showDialog(td?: TaskDescription) {
        this.localTD = new TaskDescription();
        this._isCreate = true;
        this._uploader = new FileUploader(this._fileOptions);
        if (td) {
            this.localTD = td;
            this._title = "Редактирование задачи";
            this._isCreate = false;
        }
        else {
            this._title = "Создание задачи";
        }
        this._show = true;
    }

    public CreateTask() {
        if (this._isCreate) {
            this.taskService.Create(this.localTD).subscribe((res) => {
                    this._show = false;
                    let url = BaseApiUrl + ApiRouteConstants.File.AddFileForTD + res.data.id;
                    this._uploader.options.url = url;
                    for(let i=0;i<this._uploader.queue.length;i++){
                        this._uploader.queue[i].url = url;
                        this._uploader.queue[i].upload();
                    }
                    this.notificationService.FromStatus(res);
                    this.onCreateNew.emit(res.data);
                },
                (error: any) => {
                    console.error("Ошибка" + error);
                });
        }
        else {
            this.taskService.Update(this.localTD).subscribe((res) => {
                    this._show = false;
                },
                (error: any) => {
                    console.error("Ошибка" + error);
                });
        }
    }

    public ChangeStatus(item: TaskUser, status: number) {
        item.status = status;
        this.taskService.AnswerTask(item)
            .subscribe((res) => {
                this.notificationService.FromStatus(res);
                item.statusName = TaskStatusType[status];
            }, (error: any) => {
                console.error(error);
            });
    }

    public searchUser(event: any) {
        let query = event.query.substring(0, 60);
        this.accountService.FindUsersByFIO(query)
            .subscribe((res) => {
                    this._foundedUsers = res.data;
                },
                (error: any) => {
                    console.error("Ошибка" + error);
                });
    }

    public downloadFile(item: FileDescription){
        this.fileService.downloadFile(item.id);
    }

    public removeFile(item){
        let removed = this._uploader.queue.findIndex(function (x) {
            return x._file == item._file;
        })
        this._uploader.queue.splice(removed,1);
    }

    public onSelectFile(event){
        for(let file of event.files){
            this.myFiles.push(file);
        }
    }

    public onRemoveFile(event){
        let tempMS: File[] = [];
        for(let item of this.myFiles){
            if(item.name != event.file.name || item.size != event.file.size){
                tempMS.push(item);
            }
        }
        this.myFiles = tempMS;
    }

    public onClearFiles(){
        this.myFiles = [];
    }
}

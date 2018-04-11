﻿import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {UrlSerializer} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule, RequestOptions} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {TranslationModule, TranslationService} from "angular-l10n";
import {ToastrModule} from "ngx-toastr";
import {Ng2AutoCompleteModule} from "ng2-auto-complete";
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import {FileSelectDirective} from 'ng2-file-upload';
// custom
import {routing} from "./app.routes";
import {LowerCaseUrlSerializer} from "../providers/router";
import {EnumKeysPipe} from "../pipes/enum.keys";
// http
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GlobalHttpOptions} from "../http/globalHttpOptions";
import {ServiceHttpInterceptor} from "../http/serviceHttpInterceptor";
// components
import {AppComponent} from "./app.component";
import {AccountComponent} from "../components/account/account/account.component";
import {NewsDispatcherComponent} from "../components/account/account/news-dispatcher/news-dispatcher.component";
import {DocumentComponent} from "../components/account/account/documents/document.component";
import {RegisterComponent} from "../components/account/authentification/register/register.component";
import {LogInComponent} from "../components/account/authentification/login/login.component";
import {SingleNewsComponent} from "../components/news/single-news/single-news.component";
import {EditorSingleNewsComponent} from "../components/news/editor-single-news/editor-single-news.component";
import {EditorListNewsComponent} from "../components/news/editor-list-news/editor-list-news.component";
import {ListNewsComponent} from "../components/news/list-news/list-news.component";
import {NotFoundComponent} from "../components/notfound/notfound.component";
import {UserAddComponent} from "../components/adminPanel/userAdd/userAdd";
import {ListProfessorsComponent} from "../components/professor/list-professors.component";
import {SinglePairProfessorComponent} from "../components/pairs/list-pairs-professor/single-pair-professor.component";
import {ListPairsProfessorComponent} from "../components/pairs/list-pairs-professor/list-pairs-professor.component";
import {ListPairsGroupComponent} from "../components/pairs/list-pairs-group/list-pairs-group.component";
import {SinglePairGroupComponent} from "../components/pairs/list-pairs-group/single-pair-group.component";
import {ListPairsDepartmentComponent} from "../components/pairs/list-pairs-department/list-pairs-department.component";
import {SinglePairDepartmentComponent} from "../components/pairs/list-pairs-department/single-pair-department.component";
import {EditorSinglePairComponent} from "../components/pairs/editor-single-pair/editor-single-pair.component";
import {EditorListPairsComponent} from "../components/pairs/editor-list-pairs/editor-list-pairs.component";
// services
import {NewsService} from "../services/news.service";
import {IssueService} from "../services/issues.service";
import {AuthenticationService} from "../services/authService";
import {ProfessorService} from "../services/professor.service";
import {GroupService} from "../services/group.service";
import {PairService} from "../services/pair.service";
import {DepartmentService} from "../services/department.service";
import {DisciplineService} from "../services/discipline.service";
import {RoomService} from "../services/room.service";
import {PluginService} from "../services/plugin.service";
// guards
import {AuthGuard} from "../guards/auth.guard";
import {HeaderComponent} from "../components/header/header";
import {DialogModule} from "primeng/components/dialog/dialog";
import {GrowlModule} from "primeng/components/growl/growl";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {MessageService} from "primeng/components/common/messageservice";
import {ConfirmationService, DataTableModule} from "primeng/primeng";
import {AccountService} from "../services/accountService";
import {AccessDeniedComponent} from "../components/account/accessDenied/accessDenied.component";
import {AdminPanelComponent} from "../components/adminPanel/adminPanel";
import {HasRoleDirective} from "../guards/hasRole.dirictive";
import {Globals} from "../globals";
import {DictionaryTableComponent} from "../components/adminPanel/dictionaryTable/dictionaryTable.component";
import {DictionaryService} from "../services/dictionary.service";
import {ParserXmlComponent} from "../components/adminPanel/parserXml/parserXml.component";
import {JournalComponent} from "../components/journal/journal.component";
import {JournalService} from "../services/journal.service";
import {DictionaryTableAddComponent} from "../components/adminPanel/dictionaryTable/added/dictionaryTableAdd.component";
import {LoaderComponent} from "../components/shared/loader";
import {UtilsService} from "../services/utils.service";
import {SheduleService} from "../services/shedule.service";
import {WeekScheduleComponent} from "../components/schedule/weekSchedule/weekSchedule.component";

@NgModule({
   imports: [
      CommonModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({preventDuplicates: true}),
      BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      Ng2AutoCompleteModule,
      routing,
      TranslationModule.forRoot(),
      DialogModule,
      GrowlModule,
      DataTableModule,
      AutoCompleteModule,
      ConfirmDialogModule
   ],
   declarations: [
      AppComponent,
      AccountComponent,
      NewsDispatcherComponent,
      DocumentComponent,
      LogInComponent,
      RegisterComponent,
      SingleNewsComponent,
      ListNewsComponent,
      UserAddComponent,
      HeaderComponent,
      EditorSingleNewsComponent,
      EditorListNewsComponent,
      AdminPanelComponent,
      NotFoundComponent,
      AccessDeniedComponent,
      EnumKeysPipe,
      FileSelectDirective,
      DictionaryTableComponent,
      ParserXmlComponent,
      WeekScheduleComponent,
      DictionaryTableAddComponent,
      LoaderComponent,
      JournalComponent,
      HasRoleDirective
      HasRoleDirective,
      ListProfessorsComponent,
      SinglePairProfessorComponent,
      ListPairsProfessorComponent,
      ListPairsGroupComponent,
      SinglePairGroupComponent,
      ListPairsDepartmentComponent,
      SinglePairDepartmentComponent,
      EditorListPairsComponent,
      EditorSinglePairComponent
   ],
   providers: [
      {provide: RequestOptions, useClass: GlobalHttpOptions},
      {provide: UrlSerializer, useClass: LowerCaseUrlSerializer},
      {provide: HTTP_INTERCEPTORS, useClass: ServiceHttpInterceptor, multi: true},
      TranslationService,
      AuthenticationService,
      IssueService,
      NewsService,
      MessageService,
      AccountService,
      UtilsService,
      DictionaryService,
      ConfirmationService,
      SheduleService,
      JournalService,
      AuthGuard,
      Globals,
      ProfessorService,
      GroupService,
      PairService,
      DepartmentService,
      DisciplineService,
      RoomService,
      PluginService
   ],
   entryComponents: [],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule {
}
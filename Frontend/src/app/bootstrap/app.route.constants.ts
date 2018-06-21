﻿import {appSettings} from './app.environment';

export const BaseApiUrl = appSettings.BaseApiUrl;

export const RouteConstants = {
   Home: "news",
   News: {
      All: "news",
      Create: "news/create",
      Edit: "news/:id/edit",
      EditList: "news/editList"
   },
   Account: {
      Lk: "account",
      Login: "account/login",
      Register: "account/register",
      AccessDenied: "account/accessDenied"
   },
   Admin: {
      All: "admin"
   },
   Professor: {
      All: "professors",
      GetPairs: "professor/:id/pairs"
   },
   Group: {
      All: "groups",
      GetPairs: "group/:id/pairs"
   },
   Department: {
      All: "departments",
      GetPairs: "department/pairs"
   },
   Pair: {
      All: "pairs",
      Create: "pair/create",
      Edit: "pair/:id/edit",
      EditList: "professor/:id/pairs/editList"
   },
   Journal: {
      All: "journal"
   },
   NotFound: "404"
}

export const ApiRouteConstants = {
   Account: {
      FindUsersByFIO: "account/FindUsersByFIO/:req",
      FindUserByUsername: "account/FindUserByUsername/:req",
      GetProfessors: "account/professors",
      SetProfessorDepartment: "account/professor/:userId/setDepartment/:departmentId",
      SetStudentGroup: "account/student/:userId/setGroup/:groupId",
      GetProfessorByUser: "account/professorByUser/:userId",
      GetStudentByUser: "/studentByUser/:userId"
   },
   Authentication: {
      Login: "account/login",
      Registration: "account/registration",
      Role: "account/role",
      User: "account/user"
   },
    Pair: {
        All: "pairs",
        Save: "shedule/pair/save",
        Delete: "shedule/pair/:id",
        Get: "shedule/pair/{id}",
        Proffesor: "shedule/professor/:id/pairs",
        Department: "shedule/department/:id/pairs",
        Lesson: "shedule/lesson/:id/pairs",
        Group: "shedule/group/:id/pairs",
   },
   News: {
      All: "news/all",
      Last: "news/last",
      Get: "news/get/:id",
      Delete: "news/delete/:id",
      Save: "news/save"
   },
   Task: {
      All: "task/list",
      Create: "task/create",
      Update: "task/update",
      Get: "task/get/:id",
      Delete: "task/delete/:id",
      AnswerTask: "task/answer",
      AddFile:"task/addfile"
   },
   Journal: {
      All: "journal/professor/:professorId/group/:groupId/discipline/:disciplineId",
      Save: "journal/save",
      Events: "journal/event/lesson/:lessonId",
      EventSave: "journal/event/save",
      EventDelete: "journal/event/delete/:id"
   },
   Excel:
       {
          ParseStudyPlan: "excel/ParseStudyPlan"
       },
   Dictonary: {
      Page: {
         Disciplines: "dictionary/discipline",
         Users: "dictionary/user",
         Institutes: "dictionary/institute",
         Departments: "dictionary/department",
         Groups: "dictionary/group",
         Roles: "dictionary/role",
         Rooms: "dictionary/room",
         FieldOfKnowlage: "dictionary/fieldOfKnowledge",
         Professors: "dictionary/professor",
         PointType: "dictionary/pointType",
      }
   },
   Plugin: {
      All: "plugins"
   },
    File: {
        Download: "file/download/",

        GetFilesForTD:"file/getFilesForTD/",
        GetFilesForTU:"file/getFilesForTU/",

        AddFileForTD:"file/addFileForTD/",
        AddFileForTU:"file/addFileForTU/"
    }
}
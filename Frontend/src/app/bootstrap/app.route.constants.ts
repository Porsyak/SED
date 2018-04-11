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
      GetPairs:"professor/:id/pairs"
   },
   Group:{
      All: "groups",
      GetPairs: "group/:id/pairs"
   },
   Department:{
      All:"departments",
      GetPairs:"department/pairs"
   },
   Pair:{
      All:"pairs",
      Create:"pair/create",
      Edit:"pair/:id/edit",
      EditList:"professor/:id/pairs/editList"
   },
   Journal: {
      All: "journal"
   },
   NotFound: "404"
}

export const ApiRouteConstants = {
   Account: {
      FindUsersByName: "account/FindUsersByName/:req",
      SetProfessorDepartment: "account/professor/:userId/setDepartment/:departmentId",
      SetStudentGroup: "account/student/:userId/setGroup/:groupId"
   },
   Authentication: {
      Login: "account/login",
      Registration: "account/registration",
      Role: "account/role",
      User: "account/user"
   },
   Shedule: {
       getPair: "demo/pair/{id}",
       getProfessorPairs: "demo/professor/:id/pairs",
       getEvenProfessorPairs: "demo/professor/:id/pairs/even",
       getOddProfessorPairs: "demo/professor/:id/pairs/odd",
       getEvenGroupPairs: "demo/group/:id/pairs/even",
       getOddGroupPairs: "demo/group/:id/pairs/odd",
       getEvenDepartmentPairs: "demo/department/:id/pairs/even",
       getOddDepartmentPairs: "demo/department/:id/pairs/odd",
   },
   News: {
      All: "news/all",
      Last: "news/last",
      Get: "news/get/:id",
      Delete: "news/delete/:id",
      Save: "news/save"
   },
   Issue: {
      All: "issue/list",
      Create: "issue/create",
      Update: "issue/update",
      Get: "issue/get/:id",
      Delete: "issue/delete/:id"
   },
   Journal: {
      All: "jurnal/professor/:professorId/group/:groupId"
   },
   Excel:
       {
          ParseStudyPlan: "excel/ParseStudyPlan"
       },
   Dictonary: {
      Page: {
         Disciplines: "admin/page/disciplines",
         Users: "admin/page/users",
         Institutes: "admin/page/institutes",
         Departments: "admin/page/departments",
         Groups: "admin/page/groups",
         Roles: "admin/page/roles",
         FieldOfKnowlage: "admin/page/fieldOfKnowledge"
      }
   },
   Professor: {
      All: "professors",
      GetChetPairs:"professor/:id/pairs/even",
      GetNechetPairs:"professor/:id/pairs/odd"
   },
   Group: {
      All: "groups",
      GetChetPairs:"group/:id/pairs/even",
      GetNechetPairs:"group/:id/pairs/odd"
   },
   Department:{
      GetChetPairs:"department/even",
      GetNechetPairs:"department/odd"
   },

   Pair:{
      All:"pairs",
      Save:"pairs/save",
      Get: "pair/get/:id",
      Delete: "pair/delete/:id"
   },
   Discipline:{
      All:"disciplines"
   },
   Room:{
      All:"rooms"
   },
   Plugin:{
      All:"plugins"
   }
}
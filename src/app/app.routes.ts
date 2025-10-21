import { Routes } from '@angular/router';
import { DocumentList } from './document-list/document-list';
import { DocumentCreate } from './document-create/document-create';
import { EditDocument } from './edit-document/edit-document';

export const routes: Routes = [
    {path:"",redirectTo:"document-list",pathMatch:"full"},
    {path:"document-list", component:DocumentList},
    {path:"document-create",component:DocumentCreate},
    {path:"edit-document/:id",component:EditDocument},
];

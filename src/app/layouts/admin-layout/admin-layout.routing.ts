import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AppComponent } from '../../user-profile/App.Component';
import { AuthentificateComponent}  from '../../authentificate/authentificate.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { forumComponent } from '../../forum/forum.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: AppComponent },
    { path: 'authentificate',   component: AuthentificateComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'forum',     component: forumComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { HTTP_PROVIDERS } from '@angular/http';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { NewsListComponent } from './NewsApp/newsList.component';
import {enableProdMode} from '@angular/core';
import { ROUTER_PROVIDERS }  from '@angular/router';
import { appRouterProviders }   from './app.routes';

enableProdMode();
bootstrap(NewsListComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);
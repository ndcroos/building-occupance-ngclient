import { InhabitantSearchService, SERVER_API_KEY } from './you-tube-search.service';

export const InhabitantSearchInjectables: Array<any> = [
{provide: InhabitantSearchService, useClass: InhabitantSearchService},
{provide: SERVER_API_URL, useValue: SERVER_API_URL}
];
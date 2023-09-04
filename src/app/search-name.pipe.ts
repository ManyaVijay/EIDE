import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {
  monitorData: any;
  transform(items: any, searchText: string): any {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return this.monitorData = items.filter((item: { name: string; }) => (item.name.toLowerCase().includes(searchText))
    );
  }
}
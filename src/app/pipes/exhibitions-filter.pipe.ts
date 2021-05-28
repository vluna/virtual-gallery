import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exhibitionsFilter',
  pure: false
})

export class ExhibitionsFilterPipe implements PipeTransform {
  transform(items: any[], filterText: string, filterMetadata: any={}): any {
    if (!items || !filterText) {
      filterMetadata.count = items.length;
      return items;
    }
    
    let filteredItems = items.filter(item => item.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
    filterMetadata.count = filteredItems.length;

    return filteredItems;
  }
}
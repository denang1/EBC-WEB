import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    public transform(value: string): string {
        let result: string = '';
        if(value)
            result = value.charAt(0).toUpperCase() + value.slice(1);
            
        return result;
    }
}
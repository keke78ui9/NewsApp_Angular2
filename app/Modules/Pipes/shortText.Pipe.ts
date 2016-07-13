import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

    transform(value: string, args: number) {
        let length = 100;
        if (args !== undefined) {
            length = args;
        }

        if (value.length > length) {
            return value.substring(0, args);
        }
        else {
            return value;
        }
    }
}
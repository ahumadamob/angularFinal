import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ObjectToArray'
})

export class ObjectToArrayPipe implements PipeTransform{
    transform(object: any = []): any {
        //console.log(object.values)
        return Object.values(object);
    }
}
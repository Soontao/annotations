import "reflect-metadata"

export const ClassAnnotation = <T>(name: string) => (options: T) => (target: Function) => Reflect.defineMetadata(name, options, target)

export const getClassAnnotationMetadata = <T>(name: string) => (target): T => Reflect.getMetadata(name, target)


export class ClassAnnotations<T> {

  constructor(options: T) {
    
  }

}
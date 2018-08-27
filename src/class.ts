import "reflect-metadata"

export const ClassAnnotation = <T>(name: string) => (options: T) => (target: Function) => Reflect.defineMetadata(name, options, target)

export const getClassAnnotation = <T>(name: string) => (target): T => Reflect.getMetadata(name, target)

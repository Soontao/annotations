import "reflect-metadata"

export const MethodAnnotation = <T>(name: string) => (options: T) => (target: Function) => Reflect.defineMetadata(name, options, target)

export const getMethodAnnotation = <T>(name: string) => (target): T => Reflect.getMetadata(name, target)

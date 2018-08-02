import "jest"
import "reflect-metadata"
import { ClassAnnotation, getClassAnnotationMetadata } from "../src";

describe('basic test suite', () => {

  it('should get metadata', () => {

    const opt = { name: "value" }

    const Controller = ClassAnnotation("Controller");
    const ControllerGet = getClassAnnotationMetadata("Controller")

    @Controller(opt)
    class TestController { }

    expect(ControllerGet(TestController)).toEqual(opt)

  });

});
import "jest"
import "reflect-metadata"
import { Controller, GetControllerAnnotation } from "./resource/annotations/Controller";

describe('basic test suite', () => {

  it('should get class annotation', () => {

    const opt = { name: "value" }


    @Controller(opt)
    class TestController { }

    expect(GetControllerAnnotation(TestController)).toEqual(opt)

  });





});
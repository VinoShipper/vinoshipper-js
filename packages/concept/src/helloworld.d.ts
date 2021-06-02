declare class HelloWorld {

  setTestString (inputString: string): void;

  getTestString (): string;

}

declare const helloworld: HelloWorld;
// @ts-ignore
export = helloworld;

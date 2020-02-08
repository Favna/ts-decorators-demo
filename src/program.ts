import { MethodLogger, ClassOptions } from './decorators';

interface HelloCGIOptions {
  shouldGreet: boolean;
}

@ClassOptions<HelloCGIOptions>({ shouldGreet: true })
export class HelloCGI implements HelloCGIOptions {
  shouldGreet: boolean;

  @MethodLogger()
  public greet(name: string) {
    if (this.shouldGreet) {
      return `Welcome to CGI, ${name}!`;
    }
  }
}

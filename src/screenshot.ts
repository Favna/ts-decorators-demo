import { MethodLogger } from './decorators';

class C {
  private prop: any;

  @MethodLogger()
  AVeryCoolMethod(arg) {
    this.prop = arg;
  }
}

new C().AVeryCoolMethod(1);
// [Method Start (AVeryCoolMethod)]: with arguments 1
// [Result (AVeryCoolMethod)]: => void



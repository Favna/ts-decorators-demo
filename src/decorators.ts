/**
 * Utility to make a method decorator with lighter syntax and inferred types.
 * @param fn The method to decorate
 * @example
 * // Enumerable function
 * function enumerable(value: boolean) {
 *   return createMethodDecorator((_target, _propertyKey, descriptor) => {
 *     descriptor.enumerable = value;
 *   });
 * }
 */
export function createMethodDecorator(fn: MethodDecorator) {
  return fn;
}

/**
 * Utility to make a class decorator with lighter syntax and inferred types.
 * @param fn The class to decorate
 */
export function createClassDecorator(fn: Function) {
  return fn;
}

/**
 * Class decorator that sets any options on the current class as properties
 * @param options Options to set on the class
 * @example
 * interface TerminatorOptions {
 *   firstName: string;
 *   secondName: string;
 * }
 * ClassOptions<TerminatorOptions>({ firstName: 'John', lastName: 'Connor' })
 * class Terminator() implements TerminatorOptions {
 *   firstName: string;
 *   lastName: string;
 *
 *   public run() {
 *     return this.firstName + this.lastName;
 *   }
 * }
 */
export function ClassOptions<T>(options: T) {
  return createClassDecorator(
    (target: Constructor<any>) =>
      class extends target {
        public constructor() {
          super();

          for (const [key, value] of Object.entries(options)) {
            super[key] = value;
          }
        }
      }
  );
}

export function MethodLogger() {
  return createMethodDecorator((target: unknown, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const method = descriptor.value;

    descriptor.value = function(...args: any[]) {
      console.log(`[Method Start (${propertyKey.toString()})]: with arguments ${args.join()}`);
      let result = method.apply(this, args);
      console.log(`[Result (${propertyKey.toString()})]: => ${result ?? 'void'}`);
      return result;
    };

    return descriptor;
  });
}

interface Constructor<C> {
  new (...args: any[]): C;
}

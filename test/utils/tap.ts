export async function rejects(
  t: Tap.Test,
  promise: Promise<unknown>,
  ErrorType?: new () => Error,
): Promise<void> {
  try {
    await promise;
    t.fail('Expected to reject');
  } catch (err) {
    passIfExpectedError(t, err, ErrorType);
  }
}

export function throws(
  t: Tap.Test,
  fn: (...args: unknown[]) => unknown,
  ErrorType?: new () => Error,
): void {
  try {
    fn();
    t.fail('Expected to throw');
  } catch (err) {
    passIfExpectedError(t, err, ErrorType);
  }
}

function passIfExpectedError(t: Tap.Test, err: unknown, ErrorType: (new () => Error) | undefined) {
  if (ErrorType) {
    t.ok(
      err instanceof ErrorType,
      `Expected error of type ${ErrorType.name} but got a different type`,
    );
  } else {
    t.pass();
  }
}

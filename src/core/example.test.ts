import test from "ava";
import { Example } from "./example";

test("answer: should return the secret", (t) => {
  const example = new ExampleProxy();

  const answer = example.answer();

  t.is(answer, 42);
});

class ExampleProxy {
  private readonly example = new Example();

  answer() {
    return this.example.answer();
  }
}

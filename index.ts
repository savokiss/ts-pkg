class Greeter {
  private msg: string;
  constructor(msg: string) {
    this.msg = msg
  }

  greet (): string {
    return `Hello ${this.msg}`
  }
}

export default Greeter
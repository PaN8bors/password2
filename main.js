import input from "input";

class App {
  constructor(password) {
    this.answer = password;
  }

  async main() {
    let response;

    while (response != this.answer) {
      response = await input.text("What is the password?");
      if (response == this.answer) {
        console.log("Correct!");
      } else {
        console.log("Try again");
      }
    }
  }
}

const app = new App("shazam");
app.main();

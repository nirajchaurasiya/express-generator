const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  welcome() {
    this.log("Welcome to the Express pack generator!");
  }

  writing() {
    this.fs.copy(
      this.templatePath("index.js"),
      this.destinationPath("index.js")
    );
    this.fs.copy(
      this.templatePath(".env"),
      this.destinationPath(".sample.env")
    );
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(
      this.templatePath("package-lock.json"),
      this.destinationPath("package-lock.json")
    );
    this.fs.copy(
      this.templatePath("template"),
      this.destinationPath("template")
    );
  }

  end() {
    this.log(" ");
    this.log(
      "Finished generating! Before running, make sure you have all the necessary dependencies and devDependencies installed in your system."
    );
    this.log(" ");
    this.log("https://nirajchaurasiya.com/");
    this.log(" ");
    this.log("Thank you installing express starter pack");
  }
};

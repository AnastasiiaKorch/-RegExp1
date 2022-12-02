export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (!/[\w-_]/.test(this.name)) {
          return false;
        }
        if (/\d{4}/.test(this.name)) {
          return false;
        }
        if (/^[\d-_]/.test(this.name)) {
          return false;
        }
        if (/[\d-_]$/.test(this.name)) {
          return false;
        }
        return true;
      }
  }

export default class Validator {
  static validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (regex.test(password)) {
      return true;
    }
    return false;
  }
}

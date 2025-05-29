export class RegisterDTO {
  constructor(fullName, email, phone, login, password) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.login = login;
    this.password = password;
  }
}

export class LoginDTO {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }
}

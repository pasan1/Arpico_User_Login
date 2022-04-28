export default class UserDTO{
  private _fName:string;
  private _uName:string;
  private _email:string;
  private _password:string;
  private _mobile:string;
  private _regDate:Date;

  constructor(fName: string, uName: string, email: string, password: string, mobile: string, regDate: Date) {
    this._fName = fName;
    this._uName = uName;
    this._email = email;
    this._password = password;
    this._mobile = mobile;
    this._regDate = regDate;
  }

  get fName(): string {
    return this._fName;
  }

  set fName(value: string) {
    this._fName = value;
  }

  get uName(): string {
    return this._uName;
  }

  set uName(value: string) {
    this._uName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(value: string) {
    this._mobile = value;
  }

  get regDate(): Date {
    return this._regDate;
  }

  set regDate(value: Date) {
    this._regDate = value;
  }
}

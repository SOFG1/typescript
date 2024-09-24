interface IUser {
  name: string;
  token?: string;
  authroize: (password: string) => void;
}

const user: IUser = {
  name: "test",
  authroize(pass: string) {
    console.log("authorized");
    this.token = "__secret_token__";
  },
};

user.authroize("password");

localStorage.setItem("token", user.token!); // ! mark specifies that user.token is not undefined or null
localStorage.setItem("token", user.token as string); // 'as' mark specifies that user.token is string

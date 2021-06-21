interface AuthToken {
  TokenExpires: string;
  Token: string;
}

export interface LoginData {
  Username: string;
  Password: string;
}

export interface UserData {
  User: {
    Id: string;
    UserName: string;
    FullName: string;
    ClientRoles: string[];
  };
  AuthorizationToken: AuthToken;
}

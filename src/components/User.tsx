import React from "react";

interface IUser {
  name: string;
  idade: number;
}

interface Props {
  user: IUser;
}

export const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong>
      {user.name} <br />
      <strong>E-mail: </strong>
      {user.idade} <br />
    </div>
  );
};


export type UserProps = {
  avatar_url: string,
  login: string,
  location: string,
  followers: number,
  following: number
}

export type ReposUserProps ={
  id: number,
  html_url: string,
  description: string,
  stargazers_count: number
}

export interface ReposUserInter{
  id: number,
  html_url: string,
  description: string,
  stargazers_count: number
}
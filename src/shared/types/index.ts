/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

export type ErrorType = string | boolean

export type userType = {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: false,
  score: number
};

export type UsersDetailType = {
  ogin: string,
  bio: string,
  blog: string,
  company: null | string,
  created_at: string,
  email: null | string,
  events_url: string,
  followers: number,
  followers_url: string,
  following: number,
  following_url: string,
  gists_url: string,
  gravatar_id: string,
  avatar_url: string,
  hireable: null | string,
  html_url: string,
  id: number,
  location: null | string,
  login: string,
  name: string,
  node_id: string,
  organizations_url: string,
  public_gists: number,
  public_repos: number,
  received_events_url: string,
  repos_url: string,
  site_admin: boolean,
  starred_url: string,
  subscriptions_url: string,
  twitter_username: null,
  type: string,
  updated_at: string,
  url: string,
};

export type repoType = {
  id: number,
  node_id: string,
  name: string,
  full_name: string,
  private: false,
  owner: {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: false,
  },
  html_url: string,
  description: string,
  fork: number,
  url: string,
  forks_url: string,
  keys_url: string,
  collaborators_url: string,
  teams_url: string,
  hooks_url: string,
  issue_events_url: string,
  events_url: string,
  assignees_url: string,
  branches_url: string,
  tags_url: string,
  blobs_url: string,
  git_tags_url: string,
  git_refs_url: string,
  trees_url: string,
  statuses_url: string,
  languages_url: string,
  stargazers_url: string,
  contributors_url: string,
  subscribers_url: string,
  subscription_url: string,
  commits_url: string,
  git_commits_url: string,
  comments_url: string,
  issue_comment_url: string,
  contents_url: string,
  compare_url: string,
  merges_url: string,
  archive_url: string,
  downloads_url: string,
  issues_url: string,
  pulls_url: string,
  milestones_url: string,
  notifications_url: string,
  labels_url: string,
  releases_url: string,
  deployments_url: string,
  created_at: string,
  updated_at: string,
  pushed_at: string,
  git_url: string,
  ssh_url: string,
  clone_url: string,
  svn_url: string,
  homepage: string,
  size: number,
  stargazers_count: number,
  watchers_count: number,
  language: null,
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: number,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: number,
  license: {
    key: string,
    name: string,
    spdx_id: string,
    url: string,
    node_id: string,
  },
  forks: number,
  open_issues: number,
  watchers: number,
  default_branch: string,
}

export type usersStateType = {
  loading: boolean,
  error: ErrorType,
  data: userType[]
}

export type userStateType = {
  loading: boolean,
  error: ErrorType,
  data: UsersDetailType 
}

export type reposStateType = {
  loading: boolean,
  error: ErrorType,
  data: repoType[]
}

export type appStateType = {
  users: usersStateType,
  user: userStateType,
  repos: reposStateType
}

export type AppDispatch = ThunkDispatch<appStateType, any, AnyAction>

export type ThunkResult<R> = ThunkAction<R, appStateType, AxiosInstance, AnyAction>
export interface SessionState {
  username: string | undefined;
  accessToken: string | undefined;
}

export function createInitialState() {
  return {
    username: undefined,
    accessToken: undefined,
    ...JSON.parse(localStorage.getItem('session') as string),
  } as SessionState;
}

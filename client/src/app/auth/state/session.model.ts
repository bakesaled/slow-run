import { LocalStorageService } from '../../services/local-storage/local-storage.service';

export interface SessionState {
  id: string | undefined;
  username: string | undefined;
  accessToken: string | undefined;
}

export function createInitialState(storageService: LocalStorageService) {
  return {
    id: undefined,
    username: undefined,
    accessToken: undefined,
    ...JSON.parse(storageService.get('session') as string),
  } as SessionState;
}

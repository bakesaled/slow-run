import { LocalStorageService } from '../../services/local-storage/local-storage.service';

export interface SessionState {
  username: string | undefined;
  refreshToken: string | undefined;
}

export function createInitialState(storageService: LocalStorageService) {
  return {
    username: undefined,
    refreshToken: undefined,
    ...JSON.parse(storageService.get('session') as string),
  } as SessionState;
}

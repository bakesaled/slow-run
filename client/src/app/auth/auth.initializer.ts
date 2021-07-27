import { SessionService } from './state/session.service';

export function authInitializer(sessionService: SessionService) {
  return () =>
    new Promise((resolve) => {
      sessionService.refreshToken().subscribe().add(resolve);
    });
}

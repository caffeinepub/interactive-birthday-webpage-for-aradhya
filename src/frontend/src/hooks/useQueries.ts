import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { AppState } from '../backend';

export function useGetState() {
  const { actor, isFetching } = useActor();

  return useQuery<AppState>({
    queryKey: ['appState'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getState();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNextScreen() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (screenNum: number) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.nextScreen(BigInt(screenNum));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appState'] });
    },
  });
}

export function usePopBalloon() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (index: number) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.popBalloon(BigInt(index));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appState'] });
    },
  });
}

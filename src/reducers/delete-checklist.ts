import selectActiveProfile from '../selectors/select-active-profile';
import { Id } from '../types';
import { State } from '../reducer';

interface DeleteChecklistAction {
  id: Id;
  type: 'DeleteChecklist';
}

const deleteChecklist = (state: State, action: DeleteChecklistAction) => {
  const activeProfile = selectActiveProfile(state);

  return {
    ...state,
    profiles: {
      ...state.profiles,
      [activeProfile.id]: {
        ...activeProfile,
        checklists: activeProfile.checklists.filter((id) => id !== action.id),
      },
    },
  };
};

export default deleteChecklist;
export type { DeleteChecklistAction };
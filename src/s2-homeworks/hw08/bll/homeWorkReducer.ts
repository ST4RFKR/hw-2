import { UserType } from '../HW8';

type ActionType = { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      // by name
      const filteredUp = [...state].sort((a: UserType, b: UserType) =>
        a.name.localeCompare(b.name),
      );
      const filteredDonw = [...state].sort((a: UserType, b: UserType) =>
        b.name.localeCompare(a.name),
      );

      return action.payload === 'up' ? filteredUp : filteredDonw;
    }
    case 'check': {
      const filteredAge = state.filter((el: UserType) => el.age >= action.payload);
      return [...filteredAge].sort((a, b) => a.age - b.age);
    }
    default:
      return state;
  }
};
